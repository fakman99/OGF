import { NgClass } from '@angular/common';
import {
  Component,
  ElementRef,
  HostListener,
  ViewChild,
} from '@angular/core';
import { CdkTrapFocus } from '@angular/cdk/a11y';
import { NgIcon } from '@ng-icons/core';
import { ScrollService } from '../../core/scroll.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgClass, NgIcon, CdkTrapFocus],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  @ViewChild('menuToggle') private menuToggle?: ElementRef<HTMLButtonElement>;

  isScrolled = false;
  isMobileMenuOpen = false;

  readonly navLinks = [
    { id: 'about', label: 'ABOUT' },
    { id: 'certifications', label: 'CERTS' },
    { id: 'services', label: 'SERVICES' },
    { id: 'stack', label: 'STACK' },
    { id: 'projects', label: 'PROJECTS' },
    { id: 'contact', label: 'CONTACT' },
  ] as const;

  constructor(private readonly scroll: ScrollService) {}

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.isScrolled = window.scrollY > 50;
  }

  scrollToSection(id: string): void {
    if (this.isMobileMenuOpen) {
      this.isMobileMenuOpen = false;
      // Let the menu close and layout settle before smooth scroll (avoids interrupted animation).
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
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    if (!this.isMobileMenuOpen) {
      queueMicrotask(() => this.menuToggle?.nativeElement.focus());
    }
  }
}
