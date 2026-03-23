import { Component, signal } from '@angular/core';
import { NgIcon } from '@ng-icons/core';
import { InViewDirective } from '../../core/in-view.directive';

type ServiceIcon =
  | 'square-code'
  | 'smartphone'
  | 'database'
  | 'box'
  | 'trending-up'
  | 'users';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [NgIcon, InViewDirective],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css',
})
export class ServicesComponent {
  readonly visible = signal(false);

  readonly services: ReadonlyArray<{
    icon: ServiceIcon;
    title: string;
    command: string;
    description: string;
    tags: string[];
  }> = [
    {
      icon: 'square-code',
      title: 'Full-Stack Development',
      command: 'dev.build()',
      description:
        'End-to-end web applications with React, Angular, Node.js, Laravel, and Go.',
      tags: ['Frontend', 'Backend', 'API'],
    },
    {
      icon: 'smartphone',
      title: 'Mobile Development',
      command: 'mobile.deploy()',
      description: 'Cross-platform apps with Flutter, Ionic, and native iOS with Swift.',
      tags: ['iOS', 'Android', 'Cross-platform'],
    },
    {
      icon: 'database',
      title: 'Database Architecture',
      command: 'db.optimize()',
      description: 'Design and optimization for MySQL, PostgreSQL, and IBM i DB2.',
      tags: ['SQL', 'NoSQL', 'Performance'],
    },
    {
      icon: 'box',
      title: 'System Architecture',
      command: 'sys.scale()',
      description: 'Scalable architecture with monitoring and production support.',
      tags: ['Cloud', 'DevOps', 'Monitoring'],
    },
    {
      icon: 'trending-up',
      title: 'Business Analysis',
      command: 'analyze.requirements()',
      description: 'Translating business needs into technical solutions.',
      tags: ['Strategy', 'Planning', 'Documentation'],
    },
    {
      icon: 'users',
      title: 'Product Ownership',
      command: 'product.manage()',
      description: 'PSPO I certified, bridging stakeholders and development teams.',
      tags: ['Agile', 'Scrum', 'Leadership'],
    },
  ];

  onInView(): void {
    this.visible.set(true);
  }

  iconName(icon: ServiceIcon): string {
    const map: Record<ServiceIcon, string> = {
      'square-code': 'lucide-square-code',
      smartphone: 'lucide-smartphone',
      database: 'lucide-database',
      box: 'lucide-box',
      'trending-up': 'lucide-trending-up',
      users: 'lucide-users',
    };
    return map[icon];
  }
}
