import { Component, inject, signal } from '@angular/core';
import { NgIcon } from '@ng-icons/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { CERTIFICATIONS, Certification } from '../../data/certifications';
import { InViewDirective } from '../../core/in-view.directive';

@Component({
  selector: 'app-certifications',
  standalone: true,
  imports: [NgIcon, InViewDirective, TranslatePipe],
  templateUrl: './certifications.component.html',
  styleUrl: './certifications.component.css',
})
export class CertificationsComponent {
  private readonly translate = inject(TranslateService);

  readonly visible = signal(false);
  readonly items = CERTIFICATIONS;

  onInView(inside: boolean): void {
    this.visible.set(inside);
  }

  certCardDelayMs(i: number): number {
    const n = this.items.length;
    return this.visible() ? i * 120 : (n - 1 - i) * 100;
  }

  certLogoAria(c: Certification): string {
    const issuer = this.translate.instant(
      `certs.items.${c.credentialId}.issuerShort`,
    );
    const alt = this.translate.instant(
      `certs.items.${c.credentialId}.issuerLogoAlt`,
    );
    return this.translate.instant('certs.ariaLogoExternal', { issuer, alt });
  }

  verifyLinkText(c: Certification): string {
    const key = `certs.items.${c.credentialId}.verifyLabel`;
    const v = this.translate.instant(key);
    return v === key ? this.translate.instant('certs.verifyFallback') : v;
  }
}
