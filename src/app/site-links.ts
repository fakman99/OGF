/**
 * Update these URLs to match your public profiles (single source for header / footer).
 */
export const SITE_SOCIAL = {
  linkedin: 'https://www.linkedin.com/in/ogf-solutions-fatih-akman',
} as const;

export const SITE_ORIGIN = 'https://fatihakman.dev';

/** Primary contact for mailto and displayed address */
export const SITE_EMAIL = 'fatihakman1999@gmail.com';

/** Legal entity (footer, JSON-LD) — keep in sync with billing identity */
export const SITE_COMPANY = {
  tradeName: 'OGF Solutions',
  legalName: 'OGF Solutions (SRL)',
  /** Human-readable VAT (Belgium), footer */
  vat: 'BE 1031.478.796',
  /** Schema.org vatID — no spaces/dots */
  vatId: 'BE1031478796',
  /** Single line for UI (footer) */
  address: 'Square des Cicindèles 2, 1170 Watermael-Boitsfort',
  postalAddress: {
    streetAddress: 'Square des Cicindèles 2',
    postalCode: '1170',
    addressLocality: 'Watermael-Boitsfort',
    addressCountry: 'BE',
  },
} as const;

/** Person + SEO / structured data */
export const SITE_PERSON = {
  name: 'Fatih Akman',
  jobTitle: 'Full-Stack Developer & Analyst',
} as const;
