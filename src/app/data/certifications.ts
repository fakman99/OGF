export interface Certification {
  credentialId: string;
  /** When true, show `certs.items.<id>.category` from i18n. */
  hasCategory?: boolean;
  /** When true, show expiry row from i18n. */
  showExpires?: boolean;
  skills?: string[];
  verifyUrl?: string;
  /** Local path (e.g. /icons/…) or absolute URL */
  issuerLogoSrc?: string;
  /** Optional link for the logo (e.g. issuer / encyclopedia page). */
  issuerLinkUrl?: string;
}

export const CERTIFICATIONS: Certification[] = [
  {
    credentialId: '180944_10122025',
    hasCategory: true,
    showExpires: true,
    issuerLogoSrc: '/icons/anssi-logo.svg',
    issuerLinkUrl:
      'https://fr.wikipedia.org/wiki/Agence_nationale_de_la_s%C3%A9curit%C3%A9_des_syst%C3%A8mes_d%27information',
  },
  {
    credentialId: '66a5fc98-e77c-433b-8826-86a75885e380',
    showExpires: true,
    skills: ['JIRA', 'Scrum'],
    verifyUrl:
      'https://www.scrum.org/professional-scrum-product-owner-certifications',
    issuerLogoSrc: '/icons/scrum.png',
    issuerLinkUrl: 'https://www.scrum.org/',
  },
];
