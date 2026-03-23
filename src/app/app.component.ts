import { AfterViewInit, Component, inject } from '@angular/core';
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
export class AppComponent implements AfterViewInit {
  private readonly scroll = inject(ScrollService);
  private readonly _language = inject(LanguageService);

  ngAfterViewInit(): void {
    queueMicrotask(() => {
      const raw = window.location.hash?.replace(/^#/, '') ?? '';
      if (raw && document.getElementById(raw)) {
        this.scroll.scrollToId(raw);
      }
    });
  }
}
