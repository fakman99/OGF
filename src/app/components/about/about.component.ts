import { NgClass } from '@angular/common';
import { Component, DestroyRef, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { InViewDirective } from '../../core/in-view.directive';

/** Matches `about.code.0` … `about.code.21` in i18n (22 lines). */
const ABOUT_CODE_LINE_COUNT = 22;

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NgClass, InViewDirective, TranslatePipe],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  private readonly translate = inject(TranslateService);
  private readonly destroyRef = inject(DestroyRef);

  readonly visible = signal(false);
  readonly codeLines = signal<string[]>([]);

  constructor() {
    const refresh = (): void => {
      const lines: string[] = [];
      for (let i = 0; i < ABOUT_CODE_LINE_COUNT; i++) {
        lines.push(this.translate.instant(`about.code.${i}`));
      }
      this.codeLines.set(lines);
    };
    refresh();
    this.translate.onLangChange
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(refresh);
  }

  onInView(inside: boolean): void {
    this.visible.set(inside);
  }

  codeLineDelayMs(i: number): number {
    const n = this.codeLines().length;
    if (n === 0) return 0;
    return this.visible() ? i * 50 : (n - 1 - i) * 45;
  }

  lineClass(line: string): string {
    if (!line) return 'text-gray-300';
    if (line.includes('//')) return 'text-gray-500';
    if (
      line.includes('class') ||
      line.includes('constructor') ||
      line.includes('return')
    ) {
      return 'text-purple-400';
    }
    if (line.includes('this.')) return 'text-blue-400';
    if (line.includes("'") || line.includes('"')) return 'text-green-400';
    if (
      line.includes('[') ||
      line.includes(']') ||
      line.includes('{') ||
      line.includes('}')
    ) {
      return 'text-yellow-400';
    }
    return 'text-gray-300';
  }
}
