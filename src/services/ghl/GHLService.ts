/**
 * GoHighLevel (GHL) Integration Service
 * Centralized CRM adapter.
 * Handles deduplication, contact sync, opportunity creation, calendar booking, dynamic tagging, and error management.
 * 
 * CRITICAL RULE:
 * Never throw unhandled exceptions that could crash the booking flow.
 * Always preserve local data first.
 */

import { GHL_CONFIG, isGHLConfigured } from './ghlConfig';
import { bookingStore, type AppointmentRecord, type ContactRecord } from '../db/bookingStore';

export interface GHLContactPayload {
  firstName: string;
  lastName: string;
  name: string;
  email: string;
  phone: string;
  city?: string;
  state?: string;
  postalCode?: string;
  tags: string[];
  source?: string;
  customField?: Record<string, string>;
}

export class GHLService {
  /**
   * Generates dynamic CRM tags according to business rules
   */
  static generateTags(contact: ContactRecord, appointment: AppointmentRecord): string[] {
    const tags: string[] = [
      'lead-website',
      'appointment-online',
      'appointment-confirmed'
    ];

    // Service tag
    if (appointment.service_id) {
      const cleanService = appointment.service_name
        .toLowerCase()
        .replace(/[^a-z0-9]/g, '-')
        .replace(/-+/g, '-');
      tags.push(`service-${cleanService}`);
    }

    // City tag
    if (appointment.city) {
      const cleanCity = appointment.city
        .toLowerCase()
        .replace(/[^a-z0-9]/g, '-')
        .replace(/-+/g, '-');
      tags.push(`city-${cleanCity}`);
    }

    // Language tag
    tags.push(contact.preferred_language === 'en' ? 'language-english' : 'language-spanish');

    // Appointment Type tag
    tags.push(`type-${appointment.appointment_type}`);

    // Marketing Campaign / Source tag if present
    if (appointment.utm_campaign) {
      tags.push(`campaign-${appointment.utm_campaign.toLowerCase()}`);
    }

    return Array.from(new Set(tags));
  }

  /**
   * Searches for existing GHL contact by phone or email
   */
  static async findContact(phone: string, email: string): Promise<string | null> {
    if (!isGHLConfigured()) return null;

    try {
      const cleanPhone = phone.replace(/\D/g, '');
      const url = `${GHL_CONFIG.apiUrl}/contacts/lookup?phone=${encodeURIComponent(cleanPhone)}&email=${encodeURIComponent(email)}`;
      
      const res = await fetch(url, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${GHL_CONFIG.apiKey}`,
          'Content-Type': 'application/json'
        }
      });

      if (!res.ok) return null;
      const data = await res.json();
      if (data && data.contacts && data.contacts.length > 0) {
        return data.contacts[0].id || null;
      }
    } catch (e) {
      console.warn('[GHLService] Contact lookup failed:', e);
    }

    return null;
  }

  /**
   * Creates or updates a contact in GHL without duplicates
   */
  static async createOrUpdateContact(contact: ContactRecord, appointment: AppointmentRecord): Promise<string | null> {
    if (!isGHLConfigured()) return null;

    const tags = this.generateTags(contact, appointment);
    const existingGhlId = contact.ghl_contact_id || await this.findContact(contact.phone, contact.email);

    // Map custom fields if configured
    const customFields: Record<string, string> = {};
    if (GHL_CONFIG.customFields.preferredLanguage) customFields[GHL_CONFIG.customFields.preferredLanguage] = contact.preferred_language;
    if (GHL_CONFIG.customFields.serviceRequested) customFields[GHL_CONFIG.customFields.serviceRequested] = appointment.service_name;
    if (GHL_CONFIG.customFields.city) customFields[GHL_CONFIG.customFields.city] = appointment.city;
    if (GHL_CONFIG.customFields.appointmentType) customFields[GHL_CONFIG.customFields.appointmentType] = appointment.appointment_type;
    if (GHL_CONFIG.customFields.bookingReference) customFields[GHL_CONFIG.customFields.bookingReference] = appointment.booking_reference;

    const payload: GHLContactPayload = {
      firstName: contact.first_name,
      lastName: contact.last_name,
      name: `${contact.first_name} ${contact.last_name}`.trim(),
      email: contact.email,
      phone: contact.phone,
      city: contact.city,
      state: contact.state || 'NJ',
      postalCode: contact.postal_code,
      tags,
      source: appointment.source || 'Website Booking Form',
      customField: customFields
    };

    try {
      if (existingGhlId) {
        // Update existing contact
        const updateUrl = `${GHL_CONFIG.apiUrl}/contacts/${existingGhlId}`;
        const res = await fetch(updateUrl, {
          method: 'PUT',
          headers: {
            'Authorization': `Bearer ${GHL_CONFIG.apiKey}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(payload)
        });

        if (res.ok) {
          const data = await res.json();
          return data.contact?.id || existingGhlId;
        }
      } else {
        // Create new contact
        const createUrl = `${GHL_CONFIG.apiUrl}/contacts/`;
        const res = await fetch(createUrl, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${GHL_CONFIG.apiKey}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(payload)
        });

        if (res.ok) {
          const data = await res.json();
          return data.contact?.id || null;
        }
      }
    } catch (e) {
      console.warn('[GHLService] Error creating/updating contact:', e);
    }

    return existingGhlId || null;
  }

  /**
   * Creates Opportunity in GHL Pipeline
   */
  static async createOpportunity(contactId: string, appointment: AppointmentRecord): Promise<string | null> {
    if (!isGHLConfigured() || !GHL_CONFIG.pipelineId) return null;

    try {
      const stageId = GHL_CONFIG.stages.appointmentScheduled || GHL_CONFIG.stages.newLead;
      const url = `${GHL_CONFIG.apiUrl}/pipelines/${GHL_CONFIG.pipelineId}/opportunities`;
      
      const payload = {
        title: `Cita: ${appointment.service_name} - ${appointment.contact_name}`,
        stageId,
        status: 'open',
        contactId,
        monetaryValue: 0,
        source: appointment.source || 'Website Booking',
        customFields: [
          { key: 'booking_reference', value: appointment.booking_reference },
          { key: 'service', value: appointment.service_name },
          { key: 'appointment_date', value: `${appointment.date} ${appointment.start_time}` }
        ]
      };

      const res = await fetch(url, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${GHL_CONFIG.apiKey}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (res.ok) {
        const data = await res.json();
        return data.opportunity?.id || null;
      }
    } catch (e) {
      console.warn('[GHLService] Error creating opportunity:', e);
    }

    return null;
  }

  /**
   * Creates appointment in GHL Calendar
   */
  static async createAppointment(contactId: string, appointment: AppointmentRecord): Promise<string | null> {
    if (!isGHLConfigured() || !GHL_CONFIG.calendarId) return null;

    try {
      const url = `${GHL_CONFIG.apiUrl}/calendars/events/appointments`;
      
      // Construct ISO start & end time with Eastern Time offset
      const startDateTime = `${appointment.date}T${appointment.start_time}:00-04:00`;
      const endDateTime = `${appointment.date}T${appointment.end_time}:00-04:00`;

      const payload = {
        calendarId: GHL_CONFIG.calendarId,
        contactId,
        startTime: startDateTime,
        endTime: endDateTime,
        title: `${appointment.service_name} - ${appointment.contact_name}`,
        appointmentStatus: 'confirmed',
        notes: appointment.notes || `Reserva en línea Ref: ${appointment.booking_reference}`
      };

      const res = await fetch(url, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${GHL_CONFIG.apiKey}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (res.ok) {
        const data = await res.json();
        return data.appointment?.id || null;
      }
    } catch (e) {
      console.warn('[GHLService] Error creating GHL appointment:', e);
    }

    return null;
  }

  /**
   * Main Orchestrator: Synchronizes a local appointment with GoHighLevel
   */
  static async syncAppointment(appointmentId: string): Promise<{ success: boolean; message: string }> {
    const app = bookingStore.appointments.get(appointmentId);
    if (!app) {
      return { success: false, message: 'Cita no encontrada en base de datos local' };
    }

    const contact = bookingStore.contacts.get(app.contact_id);
    if (!contact) {
      return { success: false, message: 'Contacto local no encontrado' };
    }

    // If GHL credentials are not configured yet, record safely without failing the user
    if (!isGHLConfigured()) {
      bookingStore.updateAppointment(appointmentId, {
        ghl_sync_status: 'pending',
        sync_error: 'GHL_API_KEY o GHL_LOCATION_ID no configurados en variables de entorno. Cita guardada de forma segura en base de datos local.'
      });

      bookingStore.log({
        event: 'crm.sync.simulated',
        provider: 'gohighlevel',
        appointment_id: appointmentId,
        contact_id: contact.id,
        request_id: `req_${Date.now()}`,
        status: 'warning',
        attempt_number: 1,
        message: 'Credenciales de GoHighLevel pendientes. La cita está asegurada localmente.'
      });

      return {
        success: true,
        message: 'Cita guardada en base de datos local. Pendiente de sincronización CRM al configurar credenciales.'
      };
    }

    // Attempt GHL synchronization
    bookingStore.updateAppointment(appointmentId, {
      ghl_sync_status: 'syncing',
      sync_attempts: (app.sync_attempts || 0) + 1
    });

    try {
      // 1. Create or Update Contact
      const ghlContactId = await this.createOrUpdateContact(contact, app);
      if (!ghlContactId) {
        throw new Error('No se pudo crear o asociar el contacto en GoHighLevel');
      }

      // 2. Create Opportunity in Pipeline
      const ghlOppId = await this.createOpportunity(ghlContactId, app);

      // 3. Create Appointment in GHL Calendar
      const ghlAppId = await this.createAppointment(ghlContactId, app);

      // 4. Update local record with synced IDs
      bookingStore.updateAppointment(appointmentId, {
        ghl_contact_id: ghlContactId,
        ghl_opportunity_id: ghlOppId,
        ghl_appointment_id: ghlAppId,
        ghl_sync_status: 'synced',
        sync_error: null,
        last_sync_at: new Date().toISOString()
      });

      bookingStore.updateContact(contact.id, {
        ghl_contact_id: ghlContactId
      });

      bookingStore.log({
        event: 'crm.sync.completed',
        provider: 'gohighlevel',
        appointment_id: appointmentId,
        contact_id: contact.id,
        request_id: `req_${Date.now()}`,
        status: 'success',
        attempt_number: app.sync_attempts + 1,
        message: `Sincronización exitosa con GoHighLevel (Contact: ${ghlContactId})`
      });

      return { success: true, message: 'Sincronización con GoHighLevel completada con éxito' };
    } catch (err: any) {
      const errorMsg = err?.message || 'Error desconocido al comunicar con GoHighLevel';
      
      bookingStore.updateAppointment(appointmentId, {
        ghl_sync_status: 'failed',
        sync_error: errorMsg,
        last_sync_at: new Date().toISOString()
      });

      bookingStore.log({
        event: 'crm.sync.failed',
        provider: 'gohighlevel',
        appointment_id: appointmentId,
        contact_id: contact.id,
        request_id: `req_${Date.now()}`,
        status: 'error',
        attempt_number: app.sync_attempts + 1,
        message: `Fallo de sincronización: ${errorMsg}`
      });

      return { success: false, message: errorMsg };
    }
  }
}
