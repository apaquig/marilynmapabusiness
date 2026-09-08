/**
 * GHL Retry Queue & Error Management
 * Manages exponential backoff retries (1m, 5m, 15m) and manual retries
 */

import { GHLService } from './GHLService';
import { bookingStore } from '../db/bookingStore';

export class RetryQueue {
  private static retryTimeouts: Map<string, any> = new Map();

  /**
   * Schedule automatic retry with progressive backoff
   */
  static scheduleRetry(appointmentId: string, attemptCount: number) {
    // Clear any existing scheduled timer
    if (this.retryTimeouts.has(appointmentId)) {
      clearTimeout(this.retryTimeouts.get(appointmentId));
      this.retryTimeouts.delete(appointmentId);
    }

    // Delay calculation:
    // Attempt 1: 1 min (60,000ms)
    // Attempt 2: 5 min (300,000ms)
    // Attempt 3: 15 min (900,000ms)
    let delayMs = 60000;
    if (attemptCount === 2) delayMs = 300000;
    else if (attemptCount >= 3) delayMs = 900000;

    // Do not schedule more than 4 automatic retries
    if (attemptCount > 4) {
      bookingStore.updateAppointment(appointmentId, {
        ghl_sync_status: 'failed',
        sync_error: 'Límite máximo de reintentos automáticos alcanzado. Requiere revisión manual.'
      });
      return;
    }

    bookingStore.updateAppointment(appointmentId, {
      ghl_sync_status: 'retrying'
    });

    const timer = setTimeout(async () => {
      this.retryTimeouts.delete(appointmentId);
      const res = await GHLService.syncAppointment(appointmentId);
      if (!res.success) {
        this.scheduleRetry(appointmentId, attemptCount + 1);
      }
    }, delayMs);

    this.retryTimeouts.set(appointmentId, timer);
  }

  /**
   * Manual retry triggered by Admin
   */
  static async retryManual(appointmentId: string): Promise<{ success: boolean; message: string }> {
    if (this.retryTimeouts.has(appointmentId)) {
      clearTimeout(this.retryTimeouts.get(appointmentId));
      this.retryTimeouts.delete(appointmentId);
    }

    return await GHLService.syncAppointment(appointmentId);
  }
}
