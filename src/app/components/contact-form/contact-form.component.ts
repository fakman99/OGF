import { Component, inject, signal } from '@angular/core';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { NgIcon } from '@ng-icons/core';
import { InViewDirective } from '../../core/in-view.directive';

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

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const v = this.form.getRawValue();
    const mailto = `mailto:contact@fatihakman.dev?subject=${encodeURIComponent(
      v.subject,
    )}&body=${encodeURIComponent(
      `Name: ${v.name}\nEmail: ${v.email}\n\nMessage:\n${v.message}`,
    )}`;
    window.location.href = mailto;
    this.snackBar.open(
      'Email client opening… Your message is ready to send.',
      'Dismiss',
      {
        duration: 5000,
        panelClass: ['portfolio-snackbar'],
      },
    );
    this.form.reset();
  }
}
