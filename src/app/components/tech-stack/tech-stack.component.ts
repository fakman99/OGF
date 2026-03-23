import { NgClass } from '@angular/common';
import { Component, signal } from '@angular/core';
import { InViewDirective } from '../../core/in-view.directive';

type TechEntry = {
  name: string;
  category: string;
  color: string;
  /** Simple Icons slug when using CDN */
  iconSlug?: string;
  /** Local or absolute image URL (e.g. Polar.sh — not on Simple Icons CDN). */
  iconSrc?: string;
};

@Component({
  selector: 'app-tech-stack',
  standalone: true,
  imports: [NgClass, InViewDirective],
  templateUrl: './tech-stack.component.html',
  styleUrl: './tech-stack.component.css',
})
export class TechStackComponent {
  readonly visible = signal(false);

  readonly gridLines = Array.from({ length: 10 }, (_, i) => i);

  readonly technologies: ReadonlyArray<TechEntry> = [
    { name: 'Go', category: 'language', color: 'text-cyan-400', iconSlug: 'go' },
    {
      name: 'Python',
      category: 'language',
      color: 'text-blue-400',
      iconSlug: 'python',
    },
    { name: 'C++', category: 'language', color: 'text-pink-400', iconSlug: 'cplusplus' },
    {
      name: 'Swift',
      category: 'language',
      color: 'text-orange-400',
      iconSlug: 'swift',
    },
    { name: 'React', category: 'frontend', color: 'text-cyan-300', iconSlug: 'react' },
    {
      name: 'Angular',
      category: 'frontend',
      color: 'text-red-400',
      iconSlug: 'angular',
    },
    {
      name: 'Flutter',
      category: 'frontend',
      color: 'text-blue-400',
      iconSlug: 'flutter',
    },
    {
      name: 'Tailwind',
      category: 'frontend',
      color: 'text-teal-400',
      iconSlug: 'tailwindcss',
    },
    {
      name: 'Material UI',
      category: 'frontend',
      color: 'text-blue-500',
      iconSlug: 'mui',
    },
    {
      name: 'Node.js',
      category: 'backend',
      color: 'text-green-400',
      iconSlug: 'nodedotjs',
    },
    {
      name: 'Laravel',
      category: 'backend',
      color: 'text-red-500',
      iconSlug: 'laravel',
    },
    {
      name: 'PHP',
      category: 'backend',
      color: 'text-indigo-400',
      iconSlug: 'php',
    },
    {
      name: 'Nginx',
      category: 'backend',
      color: 'text-green-500',
      iconSlug: 'nginx',
    },
    {
      name: 'Apache',
      category: 'backend',
      color: 'text-purple-400',
      iconSlug: 'apache',
    },
    { name: 'MySQL', category: 'database', color: 'text-blue-400', iconSlug: 'mysql' },
    {
      name: 'PostgreSQL',
      category: 'database',
      color: 'text-blue-500',
      iconSlug: 'postgresql',
    },
    {
      name: 'IBM i DB2',
      category: 'database',
      color: 'text-cyan-400',
      iconSlug: 'ibm',
    },
    { name: 'Figma', category: 'tool', color: 'text-purple-400', iconSlug: 'figma' },
    { name: 'Git', category: 'tool', color: 'text-orange-500', iconSlug: 'git' },
    { name: 'Jira', category: 'tool', color: 'text-blue-500', iconSlug: 'jira' },
    { name: 'Ionic', category: 'mobile', color: 'text-blue-400', iconSlug: 'ionic' },
    {
      name: 'Capacitor',
      category: 'mobile',
      color: 'text-indigo-400',
      iconSlug: 'capacitor',
    },
    {
      name: 'n8n',
      category: 'automation',
      color: 'text-rose-400',
      iconSlug: 'n8n',
    },
    {
      name: 'Mistral AI',
      category: 'ai',
      color: 'text-orange-400',
      iconSlug: 'mistralai',
    },
    {
      name: 'Telegram',
      category: 'automation',
      color: 'text-sky-400',
      iconSlug: 'telegram',
    },
    {
      name: 'Discord',
      category: 'automation',
      color: 'text-indigo-500',
      iconSlug: 'discord',
    },
    {
      name: 'Zapier',
      category: 'automation',
      color: 'text-amber-400',
      iconSlug: 'zapier',
    },
    {
      name: 'Stripe',
      category: 'payments',
      color: 'text-violet-400',
      iconSlug: 'stripe',
    },
    {
      name: 'Polar.sh',
      category: 'payments',
      color: 'text-emerald-400',
      iconSrc: '/icons/polar-sh.svg',
    },
    {
      name: 'Apple Wallet',
      category: 'wallet',
      color: 'text-neutral-200',
      iconSlug: 'apple',
    },
    {
      name: 'Google Wallet',
      category: 'wallet',
      color: 'text-sky-500',
      iconSlug: 'googlepay',
    },
  ];

  iconSrc(tech: TechEntry): string {
    if (tech.iconSrc) return tech.iconSrc;
    return `https://cdn.simpleicons.org/${tech.iconSlug ?? 'github'}`;
  }

  onInView(): void {
    this.visible.set(true);
  }
}
