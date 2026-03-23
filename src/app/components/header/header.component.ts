import { NgClass } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { NgIcon } from '@ng-icons/core';
import { ScrollService } from '../../core/scroll.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgClass, NgIcon],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  isScrolled = false;
  isMobileMenuOpen = false;

  readonly navLinks = [
    { id: 'about', label: 'ABOUT' },
    { id: 'services', label: 'SERVICES' },
    { id: 'stack', label: 'STACK' },
    { id: 'contact', label: 'CONTACT' },
  ] as const;

  constructor(private readonly scroll: ScrollService) {}

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.isScrolled = window.scrollY > 50;
  }

  scrollToSection(id: string): void {
    this.scroll.scrollToId(id);
    this.isMobileMenuOpen = false;
  }

  scrollToTop(): void {
    this.scroll.scrollToTop();
  }

  toggleMobile(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
}
