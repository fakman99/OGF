export interface Project {
  name: string;
  kind: string;
  years: string;
  stack: string[];
  summary: string;
  href?: string;
  confidential?: boolean;
  wip?: boolean;
  /** Newest year on the visual timeline (PDF-style spine). */
  timelineYear: number;
}

export const PROJECTS: Project[] = [
  {
    name: 'Ryflex',
    kind: 'Application · soins à domicile (Belgique)',
    years: '2026',
    stack: ['WebApp', 'Mobile'],
    summary:
      'Application de remplacement pour les services de soins à domicile en Belgique.',
    wip: true,
    timelineYear: 2026,
  },
  {
    name: 'Projet confidentiel — 2025',
    kind: 'Grande distribution (Europe) · 2025',
    years: '2025',
    stack: ['NDA', 'Enterprise'],
    summary:
      'Projet sous NDA pour une grande société européenne de la grande distribution. Détails non divulguables.',
    confidential: true,
    timelineYear: 2025,
  },
  {
    name: 'Lobi',
    kind: 'Application Android',
    years: '2023–2024',
    stack: ['Flutter', 'Firebase'],
    summary:
      'Projet personnel en cours. Application Android avec Firebase.',
    wip: true,
    timelineYear: 2024,
  },
  {
    name: 'Altrove Media',
    kind: 'Média / journal',
    years: '2023',
    stack: ['Média'],
    summary:
      "Média qui prend l'actualité sous un autre angle — Altrove.",
    href: 'https://altrove-media.com/',
    timelineYear: 2023,
  },
  {
    name: 'Lubala',
    kind: 'WebApp',
    years: '2022–2023',
    stack: ['Flutter'],
    summary:
      'WebApp développée en Flutter pour un cabinet d’avocats à Kinshasa.',
    wip: true,
    timelineYear: 2023,
  },
  {
    name: 'Havilaway',
    kind: 'WebApp · IT Manager',
    years: '2022–2023',
    stack: ['Flutter', 'SQL', 'Python', 'Automatisation'],
    summary:
      'WebApp Flutter pour une entreprise de gestion administrative et financière dans le domaine médical (Londres). Automatisation de processus, bases de données (SQL, Python).',
    timelineYear: 2023,
  },
  {
    name: 'EMSF',
    kind: 'WebApp vitrine',
    years: '2022',
    stack: ['Flutter'],
    summary:
      'Site pour l’ONG Enfance Meurtrie Sans Frontière (emsf-monde.org) — enfants de la rue et orphelins.',
    timelineYear: 2022,
  },
  {
    name: 'DeenShop',
    kind: 'Analyse de données',
    years: '2021–2022',
    stack: ['Python', 'APIs'],
    summary:
      'Outil Python pour une librairie : analyse via APIs, suivi des ventes, répartition des bénéfices (maisons d’édition, fournisseurs).',
    href: 'https://deenshop.be',
    timelineYear: 2022,
  },
  {
    name: 'La Bombetta',
    kind: 'WebApp',
    years: '2020–2021',
    stack: ['Flutter'],
    summary:
      'Site du restaurant italien La Bombetta, Grand Sablon — Rue Sainte-Anne 24, 1000 Bruxelles.',
    timelineYear: 2021,
  },
  {
    name: 'Kace',
    kind: 'WebApp e-commerce',
    years: '2020–2021',
    stack: ['Flutter'],
    summary:
      'Site de vente de T-shirts mettant en avant Charleroi.',
    timelineYear: 2021,
  },
  {
    name: 'TipStreet',
    kind: 'Application Android',
    years: '2020–2021',
    stack: ['Flutter', 'Firebase', 'Stripe'],
    summary:
      'Application de paris sportifs : Firebase (authentification, données temps réel, notifications), système de bankroll et historique, paiement via Stripe.',
    timelineYear: 2021,
  },
];

export function projectsGroupedByTimelineYear(): {
  year: number;
  projects: Project[];
}[] {
  const map = new Map<number, Project[]>();
  for (const p of PROJECTS) {
    const list = map.get(p.timelineYear) ?? [];
    list.push(p);
    map.set(p.timelineYear, list);
  }
  return [...map.entries()]
    .sort((a, b) => b[0] - a[0])
    .map(([year, projects]) => ({
      year,
      projects: projects.sort((x, y) => x.name.localeCompare(y.name)),
    }));
}
