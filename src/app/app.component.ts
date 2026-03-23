import { DOCUMENT } from '@angular/common';
import { AfterViewInit, Component, OnInit, inject } from '@angular/core';
import { LanguageService } from './core/language.service';
import { AboutComponent } from './components/about/about.component';
import { CertificationsComponent } from './components/certifications/certifications.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ServicesComponent } from './components/services/services.component';
import { ScrollProgressComponent } from './components/scroll-progress/scroll-progress.component';
import { TechStackComponent } from './components/tech-stack/tech-stack.component';
import { ScrollService } from './core/scroll.service';
import {
  SITE_COMPANY,
  SITE_ORIGIN,
  SITE_PERSON,
  SITE_SOCIAL,
} from './site-links';

const JSONLD_SCRIPT_ID = 'ogf-schema-org';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ScrollProgressComponent,
    HeaderComponent,
    HeroComponent,
    AboutComponent,
    CertificationsComponent,
    ServicesComponent,
    ProjectsComponent,
    TechStackComponent,
    ContactFormComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit, AfterViewInit {
  private readonly document = inject(DOCUMENT);
  private readonly scroll = inject(ScrollService);
  /** Ensures LanguageService is constructed at bootstrap for document meta. */
  private readonly _language = inject(LanguageService);

  ngOnInit(): void {
    const doc = this.document;
    if (doc.getElementById(JSONLD_SCRIPT_ID)) return;

    const origin = SITE_ORIGIN;
    const orgId = `${origin}/#organization`;
    const personId = `${origin}/#person`;
    const websiteId = `${origin}/#website`;

    const graph = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Organization',
          '@id': orgId,
          name: SITE_COMPANY.tradeName,
          legalName: SITE_COMPANY.legalName,
          vatID: SITE_COMPANY.vatId,
          url: origin,
          address: {
            '@type': 'PostalAddress',
            streetAddress: SITE_COMPANY.postalAddress.streetAddress,
            postalCode: SITE_COMPANY.postalAddress.postalCode,
            addressLocality: SITE_COMPANY.postalAddress.addressLocality,
            addressCountry: SITE_COMPANY.postalAddress.addressCountry,
          },
        },
        {
          '@type': 'Person',
          '@id': personId,
          name: SITE_PERSON.name,
          url: origin,
          jobTitle: SITE_PERSON.jobTitle,
          worksFor: { '@id': orgId },
          sameAs: [SITE_SOCIAL.linkedin],
        },
        {
          '@type': 'WebSite',
          '@id': websiteId,
          url: origin,
          name: SITE_COMPANY.tradeName,
          publisher: { '@id': orgId },
          inLanguage: ['en', 'fr', 'nl', 'tr'],
        },
      ],
    };

    const script = doc.createElement('script');
    script.id = JSONLD_SCRIPT_ID;
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(graph);
    doc.head.appendChild(script);
  }

  ngAfterViewInit(): void {
    queueMicrotask(() => {
      const raw = window.location.hash?.replace(/^#/, '') ?? '';
      if (raw && document.getElementById(raw)) {
        this.scroll.scrollToId(raw);
      }
    });
  }
}
