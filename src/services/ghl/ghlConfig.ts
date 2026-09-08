/**
 * GoHighLevel (GHL) CRM Adapter Configuration
 * NEVER hardcodes API keys or sensitive IDs.
 * Reads safely from server environment variables.
 */

export interface GHLConfigType {
  apiKey: string | null;
  locationId: string | null;
  calendarId: string | null;
  pipelineId: string | null;
  apiUrl: string;
  webhookSecret: string | null;
  stages: {
    newLead: string | null;
    appointmentScheduled: string | null;
    appointmentConfirmed: string | null;
    appointmentCompleted: string | null;
    noShow: string | null;
    client: string | null;
  };
  customFields: {
    preferredLanguage: string | null;
    serviceRequested: string | null;
    city: string | null;
    appointmentType: string | null;
    bookingReference: string | null;
  };
}

// Safely obtain env variables from either process.env or import.meta.env
const getEnv = (key: string): string | null => {
  if (typeof process !== 'undefined' && process.env && process.env[key]) {
    return process.env[key] as string;
  }
  // @ts-ignore
  if (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env[key]) {
    // @ts-ignore
    return import.meta.env[key] as string;
  }
  return null;
};

export const GHL_CONFIG: GHLConfigType = {
  apiKey: getEnv('GHL_API_KEY'),
  locationId: getEnv('GHL_LOCATION_ID'),
  calendarId: getEnv('GHL_CALENDAR_ID'),
  pipelineId: getEnv('GHL_PIPELINE_ID'),
  apiUrl: getEnv('GHL_API_URL') || 'https://rest.gohighlevel.com/v1',
  webhookSecret: getEnv('GHL_WEBHOOK_SECRET'),
  stages: {
    newLead: getEnv('GHL_NEW_LEAD_STAGE_ID'),
    appointmentScheduled: getEnv('GHL_APPOINTMENT_STAGE_ID'),
    appointmentConfirmed: getEnv('GHL_CONFIRMED_STAGE_ID'),
    appointmentCompleted: getEnv('GHL_COMPLETED_STAGE_ID'),
    noShow: getEnv('GHL_NOSHOW_STAGE_ID'),
    client: getEnv('GHL_CLIENT_STAGE_ID')
  },
  customFields: {
    preferredLanguage: getEnv('GHL_CF_PREFERRED_LANGUAGE'),
    serviceRequested: getEnv('GHL_CF_SERVICE_REQUESTED'),
    city: getEnv('GHL_CF_CITY'),
    appointmentType: getEnv('GHL_CF_APPOINTMENT_TYPE'),
    bookingReference: getEnv('GHL_CF_BOOKING_REFERENCE')
  }
};

/**
 * Checks if GoHighLevel is configured with valid credentials.
 */
export const isGHLConfigured = (): boolean => {
  return Boolean(GHL_CONFIG.apiKey && GHL_CONFIG.locationId);
};
