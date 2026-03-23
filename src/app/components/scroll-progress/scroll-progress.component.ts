import {
  Component,
  NgZone,
  OnDestroy,
  OnInit,
  inject,
} from '@angular/core';

@Component({
  selector: 'app-scroll-progress',
  standalone: true,
  templateUrl: './scroll-progress.component.html',
  styleUrl: './scroll-progress.component.css',
})
export class ScrollProgressComponent implements OnInit, OnDestroy {
  private readonly ngZone = inject(NgZone);

  /** 0–100 along the document scroll range. */
  progressPct = 0;

  /** Hidden while scrolling up; shown when scrolling down or near top. */
  barVisible = true;

  private lastScrollY = 0;
  private rafId = 0;

  private readonly onScroll = (): void => {
    if (this.rafId) return;
    this.rafId = requestAnimationFrame(() => {
      this.rafId = 0;
      this.ngZone.run(() => this.updateMetrics());
    });
  };

  ngOnInit(): void {
    this.updateMetrics();
    this.ngZone.runOutsideAngular(() => {
      window.addEventListener('scroll', this.onScroll, { passive: true });
    });
  }

  private updateMetrics(): void {
    const el = document.documentElement;
    const y = el.scrollTop;
    const delta = y - this.lastScrollY;
    const threshold = 6;

    if (y <= 12) {
      this.barVisible = true;
    } else if (delta < -threshold) {
      this.barVisible = false;
    } else if (delta > threshold) {
      this.barVisible = true;
    }

    this.lastScrollY = y;

    const scrollable = el.scrollHeight - el.clientHeight;
    this.progressPct =
      scrollable > 0 ? Math.min(100, Math.max(0, (y / scrollable) * 100)) : 0;
  }

  ngOnDestroy(): void {
    window.removeEventListener('scroll', this.onScroll);
    if (this.rafId) cancelAnimationFrame(this.rafId);
  }
}
