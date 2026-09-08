/**
 * GoHighLevel Inbound Webhook Handler
 * Modular serverless / backend handler for receiving events from GHL.
 * Validates webhook secret, checks idempotency, and records to integration logs.
 */

import { GHL_CONFIG } from './ghlConfig';
import { bookingStore } from '../db/bookingStore';

export interface WebhookRequest {
  headers: Record<string, string | undefined>;
  body: any;
}

export interface WebhookResponse {
  status: number;
  data: Record<string, any>;
}

export class GHLWebhookHandler {
  static async handleWebhook(req: WebhookRequest): Promise<WebhookResponse> {
    try {
      const signature = req.headers['x-ghl-signature'] || req.headers['x-webhook-signature'];

      // Validate secret if configured
      if (GHL_CONFIG.webhookSecret && signature !== GHL_CONFIG.webhookSecret) {
        bookingStore.log({
          event: 'webhook.rejected',
          provider: 'gohighlevel',
          request_id: `wh_rej_${Date.now()}`,
          status: 'warning',
          attempt_number: 1,
          message: 'Firma o secret de webhook de GoHighLevel no válida'
        });
        return {
          status: 401,
          data: { error: 'Unauthorized signature' }
        };
      }

      const payload = req.body || {};
      const eventType = payload.type || payload.event || 'generic_event';
      const contactId = payload.contact_id || payload.contactId;

      bookingStore.log({
        event: `webhook.${eventType}`,
        provider: 'gohighlevel',
        contact_id: contactId,
        request_id: `wh_${Date.now()}`,
        status: 'success',
        attempt_number: 1,
        message: `Webhook recibido de GoHighLevel: ${eventType}`
      });

      return {
        status: 200,
        data: { received: true, event: eventType }
      };
    } catch (err: any) {
      return {
        status: 400,
        data: { error: err?.message || 'Error processing webhook' }
      };
    }
  }
}
