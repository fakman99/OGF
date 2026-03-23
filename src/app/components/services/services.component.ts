import { Component, signal } from '@angular/core';
import { NgIcon } from '@ng-icons/core';
import { InViewDirective } from '../../core/in-view.directive';

type ServiceIcon =
  | 'square-code'
  | 'server'
  | 'smartphone'
  | 'database'
  | 'box'
  | 'trending-up'
  | 'users'
  | 'workflow'
  | 'sparkles'
  | 'bot'
  | 'wallet-cards';

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
        'End-to-end web applications with React, Angular, Node.js, PHP, Laravel, and Go.',
      tags: ['Frontend', 'Backend', 'API'],
    },
    {
      icon: 'server',
      title: 'API sur mesure',
      command: 'api.custom()',
      description:
        'Design and delivery of tailor-made HTTP APIs: REST or GraphQL, authentication, versioning, documentation (OpenAPI), and integration with your existing systems and partners.',
      tags: ['REST', 'GraphQL', 'OpenAPI', 'Integration'],
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
    {
      icon: 'workflow',
      title: 'Business automation & n8n',
      command: 'automate.workflows()',
      description:
        'Workflow automation with n8n: connect CRMs, APIs, notifications, and internal tools. End-to-end process automation for SMEs and larger orgs.',
      tags: ['n8n', 'Integrations', 'APIs', 'Ops'],
    },
    {
      icon: 'sparkles',
      title: 'AI automation',
      command: 'ai.orchestrate()',
      description:
        'LLM-powered pipelines: summarisation, classification, routing, and copilots wired into your stack — from prototypes to production guardrails.',
      tags: ['Mistral', 'LLMs', 'RAG', 'Prompting'],
    },
    {
      icon: 'bot',
      title: 'Bots & messaging',
      command: 'bot.deploy()',
      description:
        'Chatbots and task bots on Telegram, webhooks, and custom backends — alerts, support flows, and lightweight automation users can talk to.',
      tags: ['Telegram', 'Discord', 'Webhooks', 'Chatbots'],
    },
    {
      icon: 'wallet-cards',
      title: 'Loyalty & wallet cards',
      command: 'loyalty.wallet()',
      description:
        'Digital fidelity / loyalty programmes: passes for Apple Wallet & Google Wallet, paired with iOS & Android apps for businesses (stamps, tiers, campaigns).',
      tags: ['iOS', 'Android', 'Wallet', 'Retail'],
    },
  ];

  onInView(): void {
    this.visible.set(true);
  }

  iconName(icon: ServiceIcon): string {
    const map: Record<ServiceIcon, string> = {
      'square-code': 'lucide-square-code',
      server: 'lucide-server',
      smartphone: 'lucide-smartphone',
      database: 'lucide-database',
      box: 'lucide-box',
      'trending-up': 'lucide-trending-up',
      users: 'lucide-users',
      workflow: 'lucide-workflow',
      sparkles: 'lucide-sparkles',
      bot: 'lucide-bot',
      'wallet-cards': 'lucide-wallet-cards',
    };
    return map[icon];
  }
}
