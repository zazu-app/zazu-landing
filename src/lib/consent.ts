// Consentimiento de cookies (RGPD). Las categorías no técnicas están denegadas
// por defecto; la analítica con cookies (GA4) solo se carga tras el consentimiento.

export type ConsentCategories = {
  analytics: boolean;
  marketing: boolean;
};

export type StoredConsent = ConsentCategories & { ts: number };

export const CONSENT_KEY = "zazu_consent_v1";
export const CONSENT_EVENT = "zazu:consent-change";
export const OPEN_SETTINGS_EVENT = "zazu:open-cookie-settings";

export function readConsent(): StoredConsent | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(CONSENT_KEY);
    return raw ? (JSON.parse(raw) as StoredConsent) : null;
  } catch {
    return null;
  }
}

export function writeConsent(categories: ConsentCategories) {
  if (typeof window === "undefined") return;
  const value: StoredConsent = { ...categories, ts: Date.now() };
  localStorage.setItem(CONSENT_KEY, JSON.stringify(value));
  window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: value }));
}
