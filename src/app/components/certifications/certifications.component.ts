import { Component, signal } from '@angular/core';
import { NgIcon } from '@ng-icons/core';
import { CERTIFICATIONS } from '../../data/certifications';
import { InViewDirective } from '../../core/in-view.directive';

@Component({
  selector: 'app-certifications',
  standalone: true,
  imports: [NgIcon, InViewDirective],
  templateUrl: './certifications.component.html',
  styleUrl: './certifications.component.css',
})
export class CertificationsComponent {
  readonly visible = signal(false);
  readonly items = CERTIFICATIONS;

  onInView(): void {
    this.visible.set(true);
  }
}
