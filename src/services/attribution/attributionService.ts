/**
 * Marketing Attribution Service
 * Captures, persists, and provides UTMs and ad click IDs across sessions
 */

export interface AttributionData {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
  gclid?: string;
  gbraid?: string;
  wbraid?: string;
  fbclid?: string;
  referrer?: string;
  landing_page?: string;
  captured_at?: string;
}

const ATTRIBUTION_STORAGE_KEY = 'mapa_attribution_v1';

export class AttributionService {
  /**
   * Reads URL parameters and captures attribution data if present.
   * Safe to call on any page load.
   */
  static init(): AttributionData {
    if (typeof window === 'undefined') return {};

    try {
      const existing = this.get();
      const params = new URLSearchParams(window.location.search);

      const utm_source = params.get('utm_source') || existing.utm_source || undefined;
      const utm_medium = params.get('utm_medium') || existing.utm_medium || undefined;
      const utm_campaign = params.get('utm_campaign') || existing.utm_campaign || undefined;
      const utm_term = params.get('utm_term') || existing.utm_term || undefined;
      const utm_content = params.get('utm_content') || existing.utm_content || undefined;
      const gclid = params.get('gclid') || existing.gclid || undefined;
      const gbraid = params.get('gbraid') || existing.gbraid || undefined;
      const wbraid = params.get('wbraid') || existing.wbraid || undefined;
      const fbclid = params.get('fbclid') || existing.fbclid || undefined;

      const referrer = document.referrer ? document.referrer : existing.referrer;
      const landing_page = window.location.pathname;

      const data: AttributionData = {
        utm_source,
        utm_medium,
        utm_campaign,
        utm_term,
        utm_content,
        gclid,
        gbraid,
        wbraid,
        fbclid,
        referrer,
        landing_page: existing.landing_page || landing_page,
        captured_at: existing.captured_at || new Date().toISOString()
      };

      sessionStorage.setItem(ATTRIBUTION_STORAGE_KEY, JSON.stringify(data));
      localStorage.setItem(ATTRIBUTION_STORAGE_KEY, JSON.stringify(data));
      return data;
    } catch (e) {
      console.warn('[AttributionService] Error saving attribution:', e);
      return {};
    }
  }

  /**
   * Retrieves saved attribution data from session/localStorage
   */
  static get(): AttributionData {
    if (typeof window === 'undefined') return {};

    try {
      const sessionData = sessionStorage.getItem(ATTRIBUTION_STORAGE_KEY);
      if (sessionData) return JSON.parse(sessionData);

      const localData = localStorage.getItem(ATTRIBUTION_STORAGE_KEY);
      if (localData) return JSON.parse(localData);
    } catch (e) {
      console.warn('[AttributionService] Error reading attribution:', e);
    }

    return {};
  }
}
