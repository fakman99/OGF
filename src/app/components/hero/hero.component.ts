import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
  inject,
} from '@angular/core';
import { NgIcon } from '@ng-icons/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { ScrollService } from '../../core/scroll.service';

type ConsolePhase = 'typing-cmd' | 'pause-cmd' | 'typing-out' | 'done';

/** Matches `hero.stdout.0` … in i18n (same pattern as `about.code`). */
const HERO_STDOUT_LINE_COUNT = 3;

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [NgIcon, TranslatePipe],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent implements OnInit, OnDestroy {
  @ViewChild('stdoutPane') private stdoutPane?: ElementRef<HTMLElement>;

  private readonly translate = inject(TranslateService);
  private readonly scroll = inject(ScrollService);

  consolePrompt = '';
  consoleCmd = '';
  private stdoutLines: string[] = [];

  commandTyped = '';
  outputTyped = '';
  /** Lines currently visible in `roles.txt` stdout (for letter-by-letter template). */
  outputLines: string[] = [];
  consolePhase: ConsolePhase = 'typing-cmd';

  private readonly consoleStartDelayMs = 900;
  private readonly loopRestartDelayMs = 3200;

  private startTimeoutId?: ReturnType<typeof setTimeout>;
  private loopRestartTimeoutId?: ReturnType<typeof setTimeout>;
  private rafId?: number;
  private lastFrameTs = 0;
  private tickAccumulator = 0;

  private cmdIndex = 0;
  private pauseCmdTicks = 0;
  private lineIndex = 0;
  private colIndex = 0;
  private pauseLineTicks = 0;

  private readonly tickMs = 26;
  private readonly pauseAfterCmdTicks = 10;
  /** Pause between stdout lines (terminal “line feed” beat). */
  private readonly pauseAfterLineTicks = 18;
  /** Slower keystrokes on the shell command. */
  private readonly cmdCharsPerTick = 1;
  /** One character per tick for clear letter-by-letter stdout. */
  private readonly outCharsPerTick = 1;

  private langSub?: Subscription;

  ngOnInit(): void {
    this.bootstrapConsole();
    this.langSub = this.translate.onLangChange.subscribe(() =>
      this.bootstrapConsole(),
    );
  }

  private syncStrings(): void {
    this.consolePrompt = this.translate.instant('hero.consolePrompt');
    this.consoleCmd = this.translate.instant('hero.consoleCmd');
    const lines: string[] = [];
    for (let i = 0; i < HERO_STDOUT_LINE_COUNT; i++) {
      lines.push(this.translate.instant(`hero.stdout.${i}`));
    }
    this.stdoutLines = lines;
  }

  private bootstrapConsole(): void {
    this.syncStrings();
    if (this.startTimeoutId) clearTimeout(this.startTimeoutId);
    this.clearLoopRestart();
    this.cancelAnimation();

    const reduce =
      typeof matchMedia !== 'undefined' &&
      matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      this.commandTyped = this.consoleCmd;
      this.outputTyped = this.stdoutLines.join('\n');
      this.outputLines = [...this.stdoutLines];
      this.consolePhase = 'done';
      return;
    }

    this.commandTyped = '';
    this.outputTyped = '';
    this.outputLines = [];
    this.consolePhase = 'typing-cmd';
    this.cmdIndex = 0;
    this.pauseCmdTicks = 0;
    this.lineIndex = 0;
    this.colIndex = 0;
    this.pauseLineTicks = 0;
    this.lastFrameTs = 0;
    this.tickAccumulator = 0;

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
        this.outputLines = [];
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
            this.scheduleLoopRestart();
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
    this.outputLines = this.outputTyped ? this.outputTyped.split('\n') : [];
  }

  /** Split stdout line into characters for per-letter animation (preserves spaces). */
  lineChars(line: string): string[] {
    return line.length ? Array.from(line) : [];
  }

  private cancelAnimation(): void {
    if (this.rafId != null) {
      cancelAnimationFrame(this.rafId);
      this.rafId = undefined;
    }
  }

  private scheduleLoopRestart(): void {
    this.clearLoopRestart();
    this.loopRestartTimeoutId = setTimeout(() => {
      this.loopRestartTimeoutId = undefined;
      this.resetConsoleForLoop();
    }, this.loopRestartDelayMs);
  }

  private clearLoopRestart(): void {
    if (this.loopRestartTimeoutId != null) {
      clearTimeout(this.loopRestartTimeoutId);
      this.loopRestartTimeoutId = undefined;
    }
  }

  private resetConsoleForLoop(): void {
    this.commandTyped = '';
    this.outputTyped = '';
    this.outputLines = [];
    this.consolePhase = 'typing-cmd';
    this.cmdIndex = 0;
    this.pauseCmdTicks = 0;
    this.lineIndex = 0;
    this.colIndex = 0;
    this.pauseLineTicks = 0;
    this.lastFrameTs = 0;
    this.tickAccumulator = 0;
    this.rafId = requestAnimationFrame((t) => this.onFrame(t));
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
    this.langSub?.unsubscribe();
    if (this.startTimeoutId) clearTimeout(this.startTimeoutId);
    this.clearLoopRestart();
    this.cancelAnimation();
  }

  scrollToContact(): void {
    this.scroll.scrollToId('contact');
  }

  scrollToAbout(): void {
    this.scroll.scrollToId('about');
  }
}
