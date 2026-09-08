/**
 * Resilient Booking Store & Data Layer
 * Handles local persistence of Contacts, Appointments, and Integration Logs.
 * 
 * CORE PRINCIPLE:
 * First save to our local store so no booking is ever lost.
 * Sychronize to external CRM (GoHighLevel) downstream.
 */

export interface ContactRecord {
  id: string;
  first_name: string;
  last_name: string;
  full_name: string;
  phone: string;
  email: string;
  city: string;
  state: string;
  postal_code?: string;
  preferred_language: 'es' | 'en';
  source: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
  gclid?: string;
  gbraid?: string;
  wbraid?: string;
  fbclid?: string;
  ghl_contact_id?: string | null;
  created_at: string;
  updated_at: string;
}

export type AppointmentStatus = 
  | 'pending'
  | 'confirmed'
  | 'rescheduled'
  | 'completed'
  | 'cancelled'
  | 'no_show';

export type GHLSyncStatus = 
  | 'pending'
  | 'syncing'
  | 'synced'
  | 'failed'
  | 'retrying';

export interface AppointmentRecord {
  id: string;
  booking_reference: string;
  contact_id: string;
  contact_name: string;
  contact_phone: string;
  contact_email: string;
  service_id: string;
  service_name: string;
  appointment_type: 'in_person' | 'phone' | 'virtual';
  date: string; // YYYY-MM-DD
  start_time: string; // HH:mm (24h or e.g. 10:30 AM)
  end_time: string; // HH:mm
  timezone: string; // America/New_York
  status: AppointmentStatus;
  notes?: string;
  city: string;
  source: string;
  landing_page: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
  gclid?: string;
  fbclid?: string;
  idempotency_key: string;
  ghl_contact_id?: string | null;
  ghl_appointment_id?: string | null;
  ghl_opportunity_id?: string | null;
  ghl_sync_status: GHLSyncStatus;
  sync_attempts: number;
  sync_error?: string | null;
  last_sync_at?: string | null;
  created_at: string;
  updated_at: string;
}

export interface IntegrationLogRecord {
  id: string;
  event: string;
  provider: 'gohighlevel' | 'local';
  appointment_id?: string;
  contact_id?: string;
  request_id: string;
  status: 'success' | 'warning' | 'error';
  attempt_number: number;
  message: string;
  created_at: string;
}

// In-Memory store for Server execution, with automatic LocalStorage sync on Client
class MemoryStore {
  contacts: Map<string, ContactRecord> = new Map();
  appointments: Map<string, AppointmentRecord> = new Map();
  logs: IntegrationLogRecord[] = [];
  private initialized = false;

  private STORAGE_KEY_CONTACTS = 'mapa_booking_contacts_v1';
  private STORAGE_KEY_APPOINTMENTS = 'mapa_booking_appointments_v1';
  private STORAGE_KEY_LOGS = 'mapa_booking_logs_v1';

  constructor() {
    this.init();
  }

  private init() {
    if (this.initialized) return;
    if (typeof window !== 'undefined' && window.localStorage) {
      try {
        const rawContacts = localStorage.getItem(this.STORAGE_KEY_CONTACTS);
        if (rawContacts) {
          const list = JSON.parse(rawContacts) as ContactRecord[];
          list.forEach(c => this.contacts.set(c.id, c));
        }

        const rawApps = localStorage.getItem(this.STORAGE_KEY_APPOINTMENTS);
        if (rawApps) {
          const list = JSON.parse(rawApps) as AppointmentRecord[];
          list.forEach(a => this.appointments.set(a.id, a));
        }

        const rawLogs = localStorage.getItem(this.STORAGE_KEY_LOGS);
        if (rawLogs) {
          this.logs = JSON.parse(rawLogs) as IntegrationLogRecord[];
        }
      } catch (e) {
        console.warn('[BookingStore] Error hydrating from localStorage:', e);
      }
    }
    this.initialized = true;
  }

  private persist() {
    if (typeof window !== 'undefined' && window.localStorage) {
      try {
        localStorage.setItem(this.STORAGE_KEY_CONTACTS, JSON.stringify(Array.from(this.contacts.values())));
        localStorage.setItem(this.STORAGE_KEY_APPOINTMENTS, JSON.stringify(Array.from(this.appointments.values())));
        localStorage.setItem(this.STORAGE_KEY_LOGS, JSON.stringify(this.logs.slice(-200))); // keep last 200 logs
      } catch (e) {
        console.warn('[BookingStore] Error persisting to localStorage:', e);
      }
    }
  }

  // --- Reference Generator ---
  generateReference(): string {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    let code = '';
    for (let i = 0; i < 5; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return `MAPA-2026-${code}`;
  }

  // --- Contact Methods ---
  findContact(phone: string, email: string): ContactRecord | undefined {
    const cleanPhone = phone.replace(/\D/g, '');
    const cleanEmail = email.trim().toLowerCase();

    for (const c of this.contacts.values()) {
      const cPhone = c.phone.replace(/\D/g, '');
      if (cleanPhone && cPhone === cleanPhone) return c;
      if (cleanEmail && c.email.trim().toLowerCase() === cleanEmail) return c;
    }
    return undefined;
  }

  saveContact(data: Omit<ContactRecord, 'id' | 'created_at' | 'updated_at'> & { id?: string }): ContactRecord {
    this.init();
    const existing = data.id 
      ? this.contacts.get(data.id) 
      : this.findContact(data.phone, data.email);

    const now = new Date().toISOString();
    if (existing) {
      const updated: ContactRecord = {
        ...existing,
        ...data,
        updated_at: now
      };
      this.contacts.set(updated.id, updated);
      this.persist();
      return updated;
    }

    const id = data.id || `ct_${Date.now()}_${Math.random().toString(36).substr(2, 6)}`;
    const newContact: ContactRecord = {
      ...data,
      id,
      created_at: now,
      updated_at: now
    };
    this.contacts.set(id, newContact);
    this.persist();
    return newContact;
  }

  updateContact(id: string, updates: Partial<ContactRecord>): ContactRecord | undefined {
    this.init();
    const existing = this.contacts.get(id);
    if (!existing) return undefined;

    const updated: ContactRecord = {
      ...existing,
      ...updates,
      updated_at: new Date().toISOString()
    };
    this.contacts.set(id, updated);
    this.persist();
    return updated;
  }

  // --- Appointment Methods ---
  isSlotAvailable(date: string, startTime: string, excludeAppointmentId?: string): boolean {
    this.init();
    for (const app of this.appointments.values()) {
      if (excludeAppointmentId && app.id === excludeAppointmentId) continue;
      if (app.status === 'cancelled' || app.status === 'no_show') continue;

      if (app.date === date && app.start_time === startTime) {
        return false; // Already booked!
      }
    }
    return true;
  }

  findByReference(reference: string): AppointmentRecord | undefined {
    this.init();
    for (const app of this.appointments.values()) {
      if (app.booking_reference.toUpperCase() === reference.trim().toUpperCase()) {
        return app;
      }
    }
    return undefined;
  }

  findByIdempotencyKey(key: string): AppointmentRecord | undefined {
    this.init();
    if (!key) return undefined;
    for (const app of this.appointments.values()) {
      if (app.idempotency_key === key) {
        return app;
      }
    }
    return undefined;
  }

  saveAppointment(data: Omit<AppointmentRecord, 'id' | 'booking_reference' | 'created_at' | 'updated_at'> & { id?: string; booking_reference?: string }): { success: boolean; appointment?: AppointmentRecord; error?: string } {
    this.init();
    const now = new Date().toISOString();

    // 1. Check idempotency
    if (data.idempotency_key) {
      const existingKey = this.findByIdempotencyKey(data.idempotency_key);
      if (existingKey) {
        return { success: true, appointment: existingKey };
      }
    }

    // 2. Strict Slot Verification before booking
    if (!this.isSlotAvailable(data.date, data.start_time, data.id)) {
      return { 
        success: false, 
        error: "Este horario acaba de ser reservado por otro usuario. Por favor selecciona otro horario disponible." 
      };
    }

    const id = data.id || `apt_${Date.now()}_${Math.random().toString(36).substr(2, 6)}`;
    const booking_reference = data.booking_reference || this.generateReference();

    const appointment: AppointmentRecord = {
      ...data,
      id,
      booking_reference,
      created_at: now,
      updated_at: now
    };

    this.appointments.set(id, appointment);
    this.persist();

    this.log({
      event: 'appointment.created',
      provider: 'local',
      appointment_id: id,
      contact_id: data.contact_id,
      request_id: `req_${Date.now()}`,
      status: 'success',
      attempt_number: 1,
      message: `Cita reservada localmente con referencia ${booking_reference}`
    });

    return { success: true, appointment };
  }

  updateAppointment(id: string, updates: Partial<AppointmentRecord>): AppointmentRecord | undefined {
    this.init();
    const existing = this.appointments.get(id);
    if (!existing) return undefined;

    const updated: AppointmentRecord = {
      ...existing,
      ...updates,
      updated_at: new Date().toISOString()
    };

    this.appointments.set(id, updated);
    this.persist();
    return updated;
  }

  listAppointments(filter?: { date?: string; status?: AppointmentStatus; search?: string }): AppointmentRecord[] {
    this.init();
    let list = Array.from(this.appointments.values());

    if (filter?.date) {
      list = list.filter(a => a.date === filter.date);
    }
    if (filter?.status) {
      list = list.filter(a => a.status === filter.status);
    }
    if (filter?.search) {
      const term = filter.search.toLowerCase();
      list = list.filter(a => 
        a.contact_name.toLowerCase().includes(term) ||
        a.booking_reference.toLowerCase().includes(term) ||
        a.contact_phone.includes(term) ||
        a.contact_email.toLowerCase().includes(term)
      );
    }

    // Sort by date and start_time desc
    return list.sort((a, b) => `${b.date} ${b.start_time}`.localeCompare(`${a.date} ${a.start_time}`));
  }

  // --- Logs ---
  log(logData: Omit<IntegrationLogRecord, 'id' | 'created_at'>): void {
    const record: IntegrationLogRecord = {
      ...logData,
      id: `log_${Date.now()}_${Math.random().toString(36).substr(2, 4)}`,
      created_at: new Date().toISOString()
    };
    this.logs.unshift(record);
    this.persist();
  }

  getLogs(limit = 50): IntegrationLogRecord[] {
    this.init();
    return this.logs.slice(0, limit);
  }
}

// Export singleton instance
export const bookingStore = new MemoryStore();
