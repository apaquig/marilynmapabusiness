/**
 * Availability Calculation Service
 * Generates and validates time slots in America/New_York timezone
 */

import { APP_CONFIG, type BookingServiceItem } from '../config/appConfig';
import { bookingStore } from '../db/bookingStore';

export interface TimeSlot {
  label: string; // e.g. "10:00 AM"
  value: string; // e.g. "10:00" (24h)
  endTime: string; // e.g. "10:45"
  available: boolean;
}

export interface DayAvailability {
  date: string; // YYYY-MM-DD
  dayOfWeek: number; // 0-6
  dayName: string; // "Lunes", "Martes", etc.
  dayNameEn: string;
  formattedDate: string; // "20 de Septiembre"
  formattedDateEn: string; // "September 20"
  isOpen: boolean;
  slots: TimeSlot[];
}

export class AvailabilityService {
  /**
   * Helper: format HH:mm into 12h AM/PM label
   */
  static formatTo12h(hhmm: string): string {
    const [hStr, mStr] = hhmm.split(':');
    let h = parseInt(hStr, 10);
    const m = mStr || '00';
    const ampm = h >= 12 ? 'PM' : 'AM';
    h = h % 12;
    if (h === 0) h = 12;
    return `${h}:${m} ${ampm}`;
  }

  /**
   * Helper: add minutes to HH:mm string
   */
  static addMinutes(hhmm: string, minutesToAdd: number): string {
    const [hStr, mStr] = hhmm.split(':');
    let totalMinutes = parseInt(hStr, 10) * 60 + parseInt(mStr, 10) + minutesToAdd;
    const h = Math.floor(totalMinutes / 60);
    const m = totalMinutes % 60;
    return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`;
  }

  /**
   * Generates calendar days available for booking (from tomorrow or today if within hours up to maxAdvanceDays)
   */
  static getAvailableDays(serviceId: string, limitDays = 30): DayAvailability[] {
    const days: DayAvailability[] = [];
    const now = new Date();
    
    // Convert now to America/New_York date string
    const nyFormatter = new Intl.DateTimeFormat('en-CA', {
      timeZone: APP_CONFIG.scheduling.timezone,
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    });
    
    const service = APP_CONFIG.services.find(s => s.id === serviceId) || APP_CONFIG.services[0];
    const duration = service.duration || 30;

    for (let i = 0; i < limitDays; i++) {
      const d = new Date(now.getTime() + i * 24 * 60 * 60 * 1000);
      const dateString = nyFormatter.format(d); // YYYY-MM-DD
      const dayOfWeek = d.getDay(); // 0 = Sunday, 1 = Monday, etc.

      // Check blocked holiday dates
      const isBlocked = APP_CONFIG.scheduling.blockedDates.includes(dateString);
      const daySchedule = (APP_CONFIG.scheduling.workingHours as any)[dayOfWeek];
      const isOpen = !isBlocked && daySchedule !== null && daySchedule !== undefined;

      const dayNames = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
      const dayNamesEn = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

      const monthNames = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
      const monthNamesEn = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

      const monthIdx = parseInt(dateString.split('-')[1], 10) - 1;
      const dayNum = parseInt(dateString.split('-')[2], 10);

      const slots = isOpen ? this.getSlotsForDate(dateString, duration) : [];

      days.push({
        date: dateString,
        dayOfWeek,
        dayName: dayNames[dayOfWeek],
        dayNameEn: dayNamesEn[dayOfWeek],
        formattedDate: `${dayNum} de ${monthNames[monthIdx]}`,
        formattedDateEn: `${monthNamesEn[monthIdx]} ${dayNum}`,
        isOpen: isOpen && slots.some(s => s.available),
        slots
      });
    }

    return days;
  }

  /**
   * Generates time slots for a specific date and duration
   */
  static getSlotsForDate(dateStr: string, durationMinutes = 30): TimeSlot[] {
    const parts = dateStr.split('-').map(Number);
    const dateObj = new Date(parts[0], parts[1] - 1, parts[2]);
    const dayOfWeek = dateObj.getDay();

    const schedule = (APP_CONFIG.scheduling.workingHours as any)[dayOfWeek];
    if (!schedule) return [];

    const [openH, openM] = schedule.open.split(':').map(Number);
    const [closeH, closeM] = schedule.close.split(':').map(Number);

    const openTotalMin = openH * 60 + openM;
    const closeTotalMin = closeH * 60 + closeM;

    const slots: TimeSlot[] = [];
    const interval = APP_CONFIG.scheduling.slotIntervalMinutes || 30;

    // Current time in America/New_York for same-day min advance checking
    const nowNY = new Date(new Date().toLocaleString("en-US", { timeZone: APP_CONFIG.scheduling.timezone }));
    const todayNYStr = nowNY.toISOString().split('T')[0];
    const currentTotalMin = nowNY.getHours() * 60 + nowNY.getMinutes();
    const minAdvanceMin = (APP_CONFIG.scheduling.minAdvanceHours || 2) * 60;

    for (let current = openTotalMin; current + durationMinutes <= closeTotalMin; current += interval) {
      const h = Math.floor(current / 60);
      const m = current % 60;
      const timeVal = `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`;
      const endTimeVal = this.addMinutes(timeVal, durationMinutes);

      // Check if slot is in the past for today
      let isAvailable = true;
      if (dateStr === todayNYStr) {
        if (current <= currentTotalMin + minAdvanceMin) {
          isAvailable = false;
        }
      } else if (dateStr < todayNYStr) {
        isAvailable = false;
      }

      // Check with bookingStore if slot was already reserved
      if (isAvailable) {
        isAvailable = bookingStore.isSlotAvailable(dateStr, timeVal);
      }

      slots.push({
        label: this.formatTo12h(timeVal),
        value: timeVal,
        endTime: endTimeVal,
        available: isAvailable
      });
    }

    return slots;
  }
}
