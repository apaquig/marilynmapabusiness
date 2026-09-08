/**
 * Safe Analytics & Event Tracking
 * Dispatches GA4 dataLayer events without sending any Personally Identifiable Information (PII)
 */

declare global {
  interface Window {
    dataLayer?: any[];
    gtag?: (...args: any[]) => void;
  }
}

export class AnalyticsTracker {
  /**
   * Generic event dispatcher with dataLayer fallback
   */
  static trackEvent(eventName: string, params: Record<string, any> = {}) {
    if (typeof window === 'undefined') return;

    // Sanitize parameters: remove any potential PII keys
    const sanitizedParams = { ...params };
    delete (sanitizedParams as any).name;
    delete (sanitizedParams as any).first_name;
    delete (sanitizedParams as any).last_name;
    delete (sanitizedParams as any).phone;
    delete (sanitizedParams as any).email;
    delete (sanitizedParams as any).notes;

    // 1. Google Tag Manager / GA4 dataLayer
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: eventName,
      ...sanitizedParams,
      timestamp: new Date().toISOString()
    });

    // 2. Global gtag if available
    if (typeof window.gtag === 'function') {
      window.gtag('event', eventName, sanitizedParams);
    }

    // 3. Custom DOM event for local subscribers
    try {
      const customEvent = new CustomEvent('mapa:tracking', {
        detail: { event: eventName, params: sanitizedParams }
      });
      window.dispatchEvent(customEvent);
    } catch (e) {
      // ignore
    }
  }

  // --- Specific CRO & Booking Funnel Events ---
  static trackPageView(page = '/citas/') {
    this.trackEvent('appointment_page_view', { page_path: page });
  }

  static trackFunnelStart() {
    this.trackEvent('appointment_started');
  }

  static trackServiceSelected(serviceId: string, serviceName: string) {
    this.trackEvent('service_selected', { service_id: serviceId, service_name: serviceName });
  }

  static trackTypeSelected(type: 'in_person' | 'phone' | 'virtual') {
    this.trackEvent('appointment_type_selected', { appointment_type: type });
  }

  static trackDateSelected(date: string) {
    this.trackEvent('appointment_date_selected', { appointment_date: date });
  }

  static trackTimeSelected(time: string) {
    this.trackEvent('appointment_time_selected', { appointment_time: time });
  }

  static trackContactFormStarted() {
    this.trackEvent('contact_information_started');
  }

  static trackSubmitted(serviceId: string, city: string) {
    this.trackEvent('appointment_submitted', { service_id: serviceId, city });
  }

  static trackConfirmed(bookingReference: string, serviceId: string, city: string) {
    this.trackEvent('appointment_confirmed', {
      booking_reference: bookingReference,
      service_id: serviceId,
      city
    });
  }

  static trackCallClick(source = 'booking_page') {
    this.trackEvent('call_click', { click_source: source });
  }

  static trackWhatsAppClick(source = 'booking_page') {
    this.trackEvent('whatsapp_click', { click_source: source });
  }
}
