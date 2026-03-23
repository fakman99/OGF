import { NgClass } from '@angular/common';
import {
  Component,
  ElementRef,
  HostListener,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import { CdkTrapFocus } from '@angular/cdk/a11y';
import { NgIcon } from '@ng-icons/core';
import { TranslatePipe } from '@ngx-translate/core';
import {
  AppLang,
  LanguageService,
  SUPPORTED_LANGS,
} from '../../core/language.service';
import { ScrollService } from '../../core/scroll.service';
import { SITE_EMAIL, SITE_SOCIAL } from '../../site-links';
import { SocialBrandLogoComponent } from '../social-brand-logo/social-brand-logo.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgClass, NgIcon, CdkTrapFocus, TranslatePipe, SocialBrandLogoComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnDestroy {
  @ViewChild('menuToggle') private menuToggle?: ElementRef<HTMLButtonElement>;
  @ViewChild('langDropdownRoot')
  private langDropdownRoot?: ElementRef<HTMLElement>;
  @ViewChild('langDropdownTrigger')
  private langDropdownTrigger?: ElementRef<HTMLButtonElement>;

  isScrolled = false;
  isMobileMenuOpen = false;
  isLangDropdownOpen = false;

  readonly langs = [...SUPPORTED_LANGS];

  readonly social = SITE_SOCIAL;
  readonly contactEmail = SITE_EMAIL;

  readonly navLinks = [
    { id: 'about', labelKey: 'nav.about' },
    { id: 'certifications', labelKey: 'nav.certifications' },
    { id: 'services', labelKey: 'nav.services' },
    { id: 'stack', labelKey: 'nav.stack' },
    { id: 'projects', labelKey: 'nav.projects' },
    { id: 'contact', labelKey: 'nav.contact' },
  ] as const;

  constructor(
    private readonly scroll: ScrollService,
    readonly language: LanguageService,
  ) {}

  ngOnDestroy(): void {
    document.body.style.overflow = '';
  }

  private syncBodyScrollLock(): void {
    document.body.style.overflow = this.isMobileMenuOpen ? 'hidden' : '';
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.isScrolled = window.scrollY > 50;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    if (!this.isLangDropdownOpen) return;
    const root = this.langDropdownRoot?.nativeElement;
    if (root && !root.contains(event.target as Node)) {
      this.isLangDropdownOpen = false;
    }
  }

  @HostListener('document:keydown', ['$event'])
  onDocumentKeydown(event: KeyboardEvent): void {
    if (event.key !== 'Escape' || !this.isLangDropdownOpen) return;
    event.preventDefault();
    this.isLangDropdownOpen = false;
    queueMicrotask(() => this.langDropdownTrigger?.nativeElement.focus());
  }

  toggleLangDropdown(): void {
    this.isLangDropdownOpen = !this.isLangDropdownOpen;
  }

  selectLangMobile(lang: AppLang): void {
    this.pickLang(lang);
    this.isLangDropdownOpen = false;
  }

  pickLang(lang: AppLang): void {
    this.language.setLang(lang);
  }

  isActiveLang(lang: AppLang): boolean {
    return this.language.currentLang === lang;
  }

  scrollToSection(id: string): void {
    if (this.isMobileMenuOpen) {
      this.isMobileMenuOpen = false;
      this.syncBodyScrollLock();
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          this.scroll.scrollToId(id);
          this.menuToggle?.nativeElement.focus();
        });
      });
      return;
    }
    this.scroll.scrollToId(id);
  }

  scrollToTop(): void {
    this.scroll.scrollToTop();
  }

  toggleMobile(): void {
    this.isLangDropdownOpen = false;
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    this.syncBodyScrollLock();
    if (!this.isMobileMenuOpen) {
      queueMicrotask(() => this.menuToggle?.nativeElement.focus());
    }
  }
}
