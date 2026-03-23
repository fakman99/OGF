import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { NgIcon } from '@ng-icons/core';
import { ScrollService } from '../../core/scroll.service';

type ConsolePhase = 'typing-cmd' | 'pause-cmd' | 'typing-out' | 'done';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [NgIcon],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent implements OnInit, OnDestroy {
  @ViewChild('stdoutPane') private stdoutPane?: ElementRef<HTMLElement>;

  readonly consolePrompt = 'fatih@portfolio:~$ ';
  readonly consoleCmd = 'cat roles.txt';

  commandTyped = '';
  outputTyped = '';
  consolePhase: ConsolePhase = 'typing-cmd';

  /** Must match `.hero-typing` in hero.component.css: animation-delay + duration (~0.35s + 0.5s). */
  private readonly consoleStartDelayMs = 900;

  private readonly stdoutLines = [
    'Freelance',
    'Analyst & Full Stack Developer',
    'Product Owner (PSPO I)',
  ];

  private startTimeoutId?: ReturnType<typeof setTimeout>;
  private rafId?: number;
  private lastFrameTs = 0;
  private tickAccumulator = 0;

  private cmdIndex = 0;
  private pauseCmdTicks = 0;
  private lineIndex = 0;
  private colIndex = 0;
  private pauseLineTicks = 0;

  /** ms between logical “ticks” (typing steps). */
  private readonly tickMs = 28;
  private readonly pauseAfterCmdTicks = 8;
  private readonly pauseAfterLineTicks = 10;
  private readonly cmdCharsPerTick = 2;
  private readonly outCharsPerTick = 2;

  constructor(private readonly scroll: ScrollService) {}

  ngOnInit(): void {
    const reduce =
      typeof matchMedia !== 'undefined' &&
      matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      this.commandTyped = this.consoleCmd;
      this.outputTyped = this.stdoutLines.join('\n');
      this.consolePhase = 'done';
      return;
    }

    this.startTimeoutId = setTimeout(() => {
      this.startTimeoutId = undefined;
      this.lastFrameTs = 0;
      this.tickAccumulator = 0;
      this.rafId = requestAnimationFrame((ts) => this.onFrame(ts));
    }, this.consoleStartDelayMs);
  }

  private onFrame(ts: number): void {
    if (!this.lastFrameTs) this.lastFrameTs = ts;
    const dt = ts - this.lastFrameTs;
    this.lastFrameTs = ts;
    this.tickAccumulator += dt;

    while (this.tickAccumulator >= this.tickMs) {
      this.tickAccumulator -= this.tickMs;
      this.tick();
      if (this.consolePhase === 'done') break;
    }

    if (this.consolePhase !== 'done') {
      this.rafId = requestAnimationFrame((t) => this.onFrame(t));
    }
  }

  private tick(): void {
    if (this.consolePhase === 'typing-cmd') {
      for (let n = 0; n < this.cmdCharsPerTick; n++) {
        if (this.cmdIndex < this.consoleCmd.length) {
          this.cmdIndex++;
          this.commandTyped = this.consoleCmd.slice(0, this.cmdIndex);
        }
      }
      if (this.cmdIndex >= this.consoleCmd.length) {
        this.consolePhase = 'pause-cmd';
        this.pauseCmdTicks = 0;
      }
      return;
    }

    if (this.consolePhase === 'pause-cmd') {
      this.pauseCmdTicks++;
      if (this.pauseCmdTicks >= this.pauseAfterCmdTicks) {
        this.consolePhase = 'typing-out';
        this.lineIndex = 0;
        this.colIndex = 0;
        this.pauseLineTicks = 0;
        this.outputTyped = '';
      }
      return;
    }

    if (this.consolePhase === 'typing-out') {
      if (this.pauseLineTicks > 0) {
        this.pauseLineTicks--;
        return;
      }

      for (let n = 0; n < this.outCharsPerTick; n++) {
        if (this.lineIndex >= this.stdoutLines.length) break;

        const line = this.stdoutLines[this.lineIndex];
        if (this.colIndex < line.length) {
          this.colIndex++;
          this.rebuildStdout();
        } else {
          this.lineIndex++;
          this.colIndex = 0;
          if (this.lineIndex >= this.stdoutLines.length) {
            this.consolePhase = 'done';
            this.rebuildStdout();
            this.cancelAnimation();
            queueMicrotask(() => this.scrollStdoutToEnd());
            return;
          }
          this.pauseLineTicks = this.pauseAfterLineTicks;
          this.rebuildStdout();
          break;
        }
      }

      queueMicrotask(() => this.scrollStdoutToEnd());
    }
  }

  private rebuildStdout(): void {
    const parts: string[] = [];
    for (let i = 0; i < this.lineIndex; i++) {
      parts.push(this.stdoutLines[i]);
    }
    if (
      this.lineIndex < this.stdoutLines.length &&
      this.colIndex > 0
    ) {
      parts.push(this.stdoutLines[this.lineIndex].slice(0, this.colIndex));
    }
    this.outputTyped = parts.join('\n');
  }

  private cancelAnimation(): void {
    if (this.rafId != null) {
      cancelAnimationFrame(this.rafId);
      this.rafId = undefined;
    }
  }

  private scrollStdoutToEnd(): void {
    const el = this.stdoutPane?.nativeElement;
    if (el) el.scrollTop = el.scrollHeight;
  }

  get showCommandCursor(): boolean {
    return this.consolePhase === 'typing-cmd';
  }

  get showOutputCursor(): boolean {
    return this.consolePhase === 'typing-out' || this.consolePhase === 'done';
  }

  get outputCursorBlinking(): boolean {
    return this.consolePhase === 'done';
  }

  ngOnDestroy(): void {
    if (this.startTimeoutId) clearTimeout(this.startTimeoutId);
    this.cancelAnimation();
  }

  scrollToContact(): void {
    this.scroll.scrollToId('contact');
  }

  scrollToAbout(): void {
    this.scroll.scrollToId('about');
  }
}
