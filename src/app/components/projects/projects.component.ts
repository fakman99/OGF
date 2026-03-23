import { Component, signal } from '@angular/core';
import { NgIcon } from '@ng-icons/core';
import { projectsGroupedByTimelineYear } from '../../data/projects';
import { InViewDirective } from '../../core/in-view.directive';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NgIcon, InViewDirective],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  readonly visible = signal(false);
  readonly timelineGroups = projectsGroupedByTimelineYear();

  /** Short link to hosted portfolio PDF (projects through 2023). */
  readonly portfolioPdf2023 = {
    href: 'https://drive.google.com/file/d/16NTm83A2T9GK85kFOqX9e8QGvvi5bJw2/view?usp=sharing',
    qrSrc: '/images/portfolio-2023-qr.png',
  } as const;

  onInView(): void {
    this.visible.set(true);
  }
}
