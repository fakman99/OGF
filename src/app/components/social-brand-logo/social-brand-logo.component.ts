import { Component, input } from '@angular/core';

export type SocialBrand = 'linkedin' | 'mail';

@Component({
  selector: 'app-social-brand-logo',
  standalone: true,
  template: `
    @switch (brand()) {
      @case ('linkedin') {
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          focusable="false"
          [attr.width]="pixelSize()"
          [attr.height]="pixelSize()"
          class="block"
        >
          <path
            fill="currentColor"
            d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
          />
        </svg>
      }
      @case ('mail') {
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          focusable="false"
          [attr.width]="pixelSize()"
          [attr.height]="pixelSize()"
          class="block"
        >
          <path
            fill="currentColor"
            d="M1.5 8.67v8.58a1.5 1.5 0 0 0 1.5 1.5h15a1.5 1.5 0 0 0 1.5-1.5V8.67l-8.75 5.73a.75.75 0 0 1-.75 0l-8.75-5.73Z"
          />
          <path
            fill="currentColor"
            d="M22.5 6.91c.1-.12.16-.27.16-.44a.75.75 0 0 0-.16-.44l-9.21-6.05a.75.75 0 0 0-.82 0L2.26 6.03a.75.75 0 0 0-.26.55V8.67l9.15 6a.4.4 0 0 0 .22.07.39.39 0 0 0 .21-.07l9.14-6V6.91Z"
          />
        </svg>
      }
    }
  `,
})
export class SocialBrandLogoComponent {
  readonly brand = input.required<SocialBrand>();
  /** Rendered width/height in px (viewBox scales). */
  readonly pixelSize = input(18);
}
