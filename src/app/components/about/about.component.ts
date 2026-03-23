import { NgClass } from '@angular/common';
import { Component, signal } from '@angular/core';
import { InViewDirective } from '../../core/in-view.directive';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NgClass, InViewDirective],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  readonly visible = signal(false);

  readonly codeLines = [
    'class Developer {',
    '',
    '    constructor() {',
    "        this.name = 'Fatih Akman';",
    "        this.role = 'Full-Stack Developer & Analyst';",
    "        this.certification = 'PSPO I';",
    "        this.experience = '5+ years';",
    '    }',
    '',
    '    getCurrentProject() {',
    '        return {',
    "            client: 'European Wholesale Industry',",
    "            type: 'Strategic Platform',",
    '            responsibilities: [',
    "                'Architecture & Development',",
    "                'Monitoring & Support',",
    "                'Stakeholder Management',",
    '            ],',
    '        };',
    '    }',
    '',
    '    getSkills() {',
    '        return {',
    "            backend: ['Go', 'Laravel', 'PHP', 'Node.js'],",
    "            frontend: ['React', 'Angular', 'Flutter'],",
    "            databases: ['MySQL', 'PostgreSQL', 'IBM i DB2'],",
    '            automation: [',
    "                'n8n', 'Mistral', 'Discord',",
    "                'Stripe / Polar', 'Bots', 'Loyalty / Wallet',",
    '            ],',
    "            specialty: 'Business-to-Tech Translation',",
    '        };',
    '    }',
    '',
    '}',
  ];

  onInView(): void {
    this.visible.set(true);
  }

  lineClass(line: string): string {
    if (!line) return 'text-gray-300';
    if (line.includes('//')) return 'text-gray-500';
    if (
      line.includes('class') ||
      line.includes('constructor') ||
      line.includes('return')
    ) {
      return 'text-purple-400';
    }
    if (line.includes('this.')) return 'text-blue-400';
    if (line.includes("'") || line.includes('"')) return 'text-green-400';
    if (
      line.includes('[') ||
      line.includes(']') ||
      line.includes('{') ||
      line.includes('}')
    ) {
      return 'text-yellow-400';
    }
    return 'text-gray-300';
  }
}
