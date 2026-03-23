import { Component, inject, signal } from '@angular/core';
import { NgIcon } from '@ng-icons/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
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
  imports: [NgIcon, InViewDirective, TranslatePipe],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css',
})
export class ServicesComponent {
  private readonly translate = inject(TranslateService);

  readonly visible = signal(false);

  readonly serviceDefs: ReadonlyArray<{ icon: ServiceIcon; key: string }> = [
    { icon: 'square-code', key: 'fullstack' },
    { icon: 'server', key: 'apicustom' },
    { icon: 'smartphone', key: 'mobile' },
    { icon: 'database', key: 'database' },
    { icon: 'box', key: 'architecture' },
    { icon: 'trending-up', key: 'analysis' },
    { icon: 'users', key: 'product' },
    { icon: 'workflow', key: 'automation' },
    { icon: 'sparkles', key: 'ai' },
    { icon: 'bot', key: 'bots' },
    { icon: 'wallet-cards', key: 'wallet' },
  ];

  onInView(inside: boolean): void {
    this.visible.set(inside);
  }

  serviceCardDelayMs(index: number): number {
    const n = this.serviceDefs.length;
    return this.visible() ? index * 100 : (n - 1 - index) * 85;
  }

  tagsFor(key: string): string[] {
    const raw = this.translate.instant(`services.${key}.tags`) as string;
    if (!raw || typeof raw !== 'string') return [];
    return raw.split('|').map((t) => t.trim());
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
