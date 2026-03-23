import { Component } from '@angular/core';
import { NgIcon } from '@ng-icons/core';
import { ScrollService } from '../../core/scroll.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [NgIcon],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  readonly quickLinks = [
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'stack', label: 'Tech Stack' },
    { id: 'contact', label: 'Contact' },
  ] as const;

  readonly year = new Date().getFullYear();

  constructor(private readonly scroll: ScrollService) {}

  scrollTo(id: string): void {
    this.scroll.scrollToId(id);
  }

  scrollToTop(): void {
    this.scroll.scrollToTop();
  }
}
