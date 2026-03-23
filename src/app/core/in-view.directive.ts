import {
  AfterViewInit,
  Directive,
  ElementRef,
  OnDestroy,
  inject,
  output,
} from '@angular/core';

@Directive({
  selector: '[appInView]',
  standalone: true,
})
export class InViewDirective implements AfterViewInit, OnDestroy {
  private readonly el = inject(ElementRef<HTMLElement>);
  private observer?: IntersectionObserver;
  private lastValue?: boolean;

  /** `true` when the host enters the viewport, `false` when it leaves (scroll up or down). */
  readonly inView = output<boolean>();

  ngAfterViewInit(): void {
    this.observer = new IntersectionObserver(
      ([entry]) => {
        const next = entry?.isIntersecting ?? false;
        if (this.lastValue === next) return;
        this.lastValue = next;
        this.inView.emit(next);
      },
      {
        threshold: 0.12,
        /** Slight inset so toggling isn’t jittery at the very edge of the screen. */
        rootMargin: '0px 0px -3% 0px',
      },
    );
    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
