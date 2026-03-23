export interface Project {
  /** Stable key for i18n (`projects.entries.<slug>.*`). */
  slug: string;
  years: string;
  stack: string[];
  href?: string;
  confidential?: boolean;
  wip?: boolean;
  /** Newest year on the visual timeline (PDF-style spine). */
  timelineYear: number;
}

export const PROJECTS: Project[] = [
  {
    slug: 'ryflex',
    years: '2026',
    stack: ['WebApp', 'Mobile'],
    wip: true,
    timelineYear: 2026,
  },
  {
    slug: 'confidential-2025',
    years: '2025',
    stack: ['NDA', 'Enterprise'],
    confidential: true,
    timelineYear: 2025,
  },
  {
    slug: 'lobi',
    years: '2023–2024',
    stack: ['Flutter', 'Firebase'],
    wip: true,
    timelineYear: 2024,
  },
  {
    slug: 'altrove-media',
    years: '2023',
    stack: ['Media'],
    href: 'https://altrove-media.com/',
    timelineYear: 2023,
  },
  {
    slug: 'lubala',
    years: '2022–2023',
    stack: ['Flutter'],
    wip: true,
    timelineYear: 2023,
  },
  {
    slug: 'havilaway',
    years: '2022–2023',
    stack: ['Flutter', 'SQL', 'Python', 'Automation'],
    timelineYear: 2023,
  },
  {
    slug: 'emsf',
    years: '2022',
    stack: ['Flutter'],
    timelineYear: 2022,
  },
  {
    slug: 'deenshop',
    years: '2021–2022',
    stack: ['Python', 'APIs'],
    href: 'https://deenshop.be',
    timelineYear: 2022,
  },
  {
    slug: 'la-bombetta',
    years: '2020–2021',
    stack: ['Flutter'],
    timelineYear: 2021,
  },
  {
    slug: 'kace',
    years: '2020–2021',
    stack: ['Flutter'],
    timelineYear: 2021,
  },
  {
    slug: 'tipstreet',
    years: '2020–2021',
    stack: ['Flutter', 'Firebase', 'Stripe'],
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
      projects: projects.sort((x, y) => x.slug.localeCompare(y.slug)),
    }));
}
