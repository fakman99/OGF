import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgIcon } from '@ng-icons/core';
import { ScrollService } from '../../core/scroll.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [NgIcon],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent implements OnInit, OnDestroy {
  displayText = '';
  private readonly fullText = 'Freelance Analyst & Full-Stack Developer';
  private intervalId?: ReturnType<typeof setInterval>;

  constructor(private readonly scroll: ScrollService) {}

  ngOnInit(): void {
    let index = 0;
    this.intervalId = setInterval(() => {
      if (index <= this.fullText.length) {
        this.displayText = this.fullText.slice(0, index);
        index++;
      } else {
        if (this.intervalId) clearInterval(this.intervalId);
      }
    }, 50);
  }

  ngOnDestroy(): void {
    if (this.intervalId) clearInterval(this.intervalId);
  }

  scrollToContact(): void {
    this.scroll.scrollToId('contact');
  }

  scrollToAbout(): void {
    this.scroll.scrollToId('about');
  }
}
