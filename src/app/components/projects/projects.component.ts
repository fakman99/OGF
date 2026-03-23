import { Component, signal } from '@angular/core';
import { NgIcon } from '@ng-icons/core';
import { TranslatePipe } from '@ngx-translate/core';
import { projectsGroupedByTimelineYear } from '../../data/projects';
import { InViewDirective } from '../../core/in-view.directive';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NgIcon, InViewDirective, TranslatePipe],
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

  onInView(inside: boolean): void {
    this.visible.set(inside);
  }

  private rowExitDelayMs(gi: number): number {
    const n = this.timelineGroups.length;
    return (n - 1 - gi) * 75;
  }

  timelineRowDelayMs(gi: number): number {
    return this.visible() ? gi * 90 : this.rowExitDelayMs(gi);
  }

  timelineDotDelayMs(gi: number): number {
    return this.visible() ? gi * 90 + 40 : this.rowExitDelayMs(gi) + 25;
  }

  timelineCardDelayMs(gi: number, pi: number, projectCount: number): number {
    if (this.visible()) return gi * 95 + pi * 70 + 140;
    return this.rowExitDelayMs(gi) + (projectCount - 1 - pi) * 65;
  }

  timelinePdfDelayMs(gi: number, projectCount: number): number {
    if (this.visible()) return gi * 95 + projectCount * 70 + 200;
    return this.rowExitDelayMs(gi) + 50;
  }
}
