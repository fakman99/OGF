export interface Certification {
  issuer: string;
  issuerShort: string;
  title: string;
  issued: string;
  expires?: string;
  credentialId: string;
  category?: string;
  skills?: string[];
  verifyUrl?: string;
  verifyLabel?: string;
  /** Local path (e.g. /icons/…) or absolute URL */
  issuerLogoSrc?: string;
  issuerLogoAlt?: string;
  /** Optional link for the logo (e.g. issuer / encyclopedia page). */
  issuerLinkUrl?: string;
}

export const CERTIFICATIONS: Certification[] = [
  {
    issuer:
      'ANSSI — Agence nationale de la sécurité des systèmes d’information',
    issuerShort: 'ANSSI',
    title: 'Initiation à la cybersécurité',
    issued: 'Déc. 2025',
    expires: 'Déc. 2035',
    credentialId: '180944_10122025',
    category: 'Cybersécurité',
    issuerLogoSrc: '/icons/anssi-logo.svg',
    issuerLogoAlt: 'Logo ANSSI',
    issuerLinkUrl:
      'https://fr.wikipedia.org/wiki/Agence_nationale_de_la_s%C3%A9curit%C3%A9_des_syst%C3%A8mes_d%27information',
  },
  {
    issuer: 'Scrum.org',
    issuerShort: 'Scrum.org',
    title: 'Professional Scrum Product Owner™ I (PSPO I)',
    issued: 'Mai 2025',
    credentialId: '66a5fc98-e77c-433b-8826-86a75885e380',
    skills: ['JIRA', 'Scrum'],
    verifyUrl:
      'https://www.scrum.org/professional-scrum-product-owner-certifications',
    verifyLabel: 'Scrum.org — PSPO I',
    issuerLogoSrc: '/icons/scrum.png',
    issuerLogoAlt: 'Scrum.org',
    issuerLinkUrl: 'https://www.scrum.org/',
  },
];
