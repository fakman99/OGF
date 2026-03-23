import { Component } from '@angular/core';
import { NgIcon } from '@ng-icons/core';
import { ScrollService } from '../../core/scroll.service';
import { SITE_EMAIL, SITE_SOCIAL } from '../../site-links';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [NgIcon],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  readonly social = SITE_SOCIAL;
  readonly contactEmail = SITE_EMAIL;

  readonly quickLinks = [
    { id: 'about', label: 'About' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'services', label: 'Services' },
    { id: 'stack', label: 'Tech Stack' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ] as const;

  readonly year = new Date().getFullYear();

  readonly company = {
    legalName: 'OGF Solutions (SRL)',
    vat: 'BE 1031.478.796',
    address: 'Square des Cicindèles 2, 1170 Watermael-Boitsfort',
  } as const;

  constructor(private readonly scroll: ScrollService) {}

  scrollTo(id: string): void {
    this.scroll.scrollToId(id);
  }

  scrollToTop(): void {
    this.scroll.scrollToTop();
  }
}
