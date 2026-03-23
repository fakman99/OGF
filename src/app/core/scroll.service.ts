import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ScrollService {
  /** Cancels in-flight programmatic scroll when a new one starts. */
  private smoothScrollGeneration = 0;

  private prefersReducedMotion(): boolean {
    return (
      typeof matchMedia !== 'undefined' &&
      matchMedia('(prefers-reduced-motion: reduce)').matches
    );
  }

  scrollToId(id: string): void {
    const el = document.getElementById(id);
    if (!el) return;

    if (this.prefersReducedMotion()) {
      el.scrollIntoView({ block: 'start', inline: 'nearest' });
      return;
    }

    const scrollMargin =
      parseFloat(getComputedStyle(el).scrollMarginTop) || 0;
    const top = el.getBoundingClientRect().top + window.scrollY;
    const rawTarget = top - scrollMargin;
    const maxY = Math.max(
      0,
      document.documentElement.scrollHeight - window.innerHeight,
    );
    const targetY = Math.min(Math.max(0, rawTarget), maxY);

    this.smoothScrollWindowTo(targetY);
  }

  scrollToTop(): void {
    if (this.prefersReducedMotion()) {
      window.scrollTo(0, 0);
      return;
    }
    this.smoothScrollWindowTo(0);
  }

  /**
   * Eased scroll on the window (reliable vs. scrollIntoView smooth in some browsers).
   */
  private smoothScrollWindowTo(targetY: number, durationMs = 720): void {
    const startY = window.scrollY;
    const distance = targetY - startY;
    if (Math.abs(distance) < 0.5) return;

    const gen = ++this.smoothScrollGeneration;
    const t0 = performance.now();

    // easeOutCubic — soft deceleration at the section
    const ease = (t: number) => 1 - Math.pow(1 - t, 3);

    const step = (now: number) => {
      if (gen !== this.smoothScrollGeneration) return;
      const elapsed = now - t0;
      const t = Math.min(1, elapsed / durationMs);
      const y = startY + distance * ease(t);
      window.scrollTo(0, y);
      if (t < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }
}
