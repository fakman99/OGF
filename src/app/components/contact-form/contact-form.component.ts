import { Component, inject, signal } from '@angular/core';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { NgIcon } from '@ng-icons/core';
import { InViewDirective } from '../../core/in-view.directive';
import { SITE_EMAIL } from '../../site-links';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatSnackBarModule,
    NgIcon,
    InViewDirective,
  ],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css',
})
export class ContactFormComponent {
  private readonly fb = inject(FormBuilder);
  private readonly snackBar = inject(MatSnackBar);

  readonly visible = signal(false);
  readonly contactEmail = SITE_EMAIL;

  /** Fixed layout positions (replaces React Math.random in template). */
  readonly blobs = [
    { left: 8, top: 15, xAmp: 45, yAmp: -35, duration: 16 },
    { left: 72, top: 22, xAmp: -40, yAmp: 28, duration: 22 },
    { left: 35, top: 68, xAmp: 38, yAmp: -42, duration: 19 },
    { left: 88, top: 55, xAmp: -32, yAmp: 36, duration: 24 },
    { left: 50, top: 40, xAmp: 28, yAmp: -25, duration: 20 },
  ] as const;

  readonly form = this.fb.nonNullable.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    subject: ['', Validators.required],
    message: ['', Validators.required],
  });

  onInView(): void {
    this.visible.set(true);
  }

  async onSubmit(): Promise<void> {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const v = this.form.getRawValue();
    const body = `Name: ${v.name}\nEmail: ${v.email}\n\nMessage:\n${v.message}`;
    const mailto = `mailto:${SITE_EMAIL}?subject=${encodeURIComponent(
      v.subject,
    )}&body=${encodeURIComponent(body)}`;
    const clipboardText = `Subject: ${v.subject}\nFrom: ${v.name} <${v.email}>\n\n${v.message}`;
    try {
      await navigator.clipboard.writeText(clipboardText);
    } catch {
      /* no clipboard permission — mailto still attempted */
    }
    window.location.href = mailto;
    this.snackBar.open(
      'Opening your email app… Message also copied to clipboard as a backup.',
      'Dismiss',
      {
        duration: 6000,
        panelClass: ['portfolio-snackbar'],
      },
    );
    this.form.reset();
  }
}
