import { Component } from '@angular/core';
import { NgIcon } from '@ng-icons/core';
import { TranslatePipe } from '@ngx-translate/core';
import { ScrollService } from '../../core/scroll.service';
import { SITE_COMPANY, SITE_EMAIL, SITE_SOCIAL } from '../../site-links';
import { SocialBrandLogoComponent } from '../social-brand-logo/social-brand-logo.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [NgIcon, TranslatePipe, SocialBrandLogoComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  readonly social = SITE_SOCIAL;
  readonly contactEmail = SITE_EMAIL;

  readonly quickLinks = [
    { id: 'about', labelKey: 'footer.about' },
    { id: 'certifications', labelKey: 'footer.certifications' },
    { id: 'services', labelKey: 'footer.services' },
    { id: 'stack', labelKey: 'footer.stack' },
    { id: 'projects', labelKey: 'footer.projects' },
    { id: 'contact', labelKey: 'footer.contact' },
  ] as const;

  readonly year = new Date().getFullYear();

  readonly company = SITE_COMPANY;

  constructor(private readonly scroll: ScrollService) {}

  scrollTo(id: string): void {
    this.scroll.scrollToId(id);
  }

  scrollToTop(): void {
    this.scroll.scrollToTop();
  }
}
