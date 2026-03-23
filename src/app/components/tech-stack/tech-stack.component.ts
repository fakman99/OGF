import { NgClass } from '@angular/common';
import { Component, signal } from '@angular/core';
import { InViewDirective } from '../../core/in-view.directive';

@Component({
  selector: 'app-tech-stack',
  standalone: true,
  imports: [NgClass, InViewDirective],
  templateUrl: './tech-stack.component.html',
  styleUrl: './tech-stack.component.css',
})
export class TechStackComponent {
  readonly visible = signal(false);

  readonly gridLines = Array.from({ length: 10 }, (_, i) => i);

  readonly technologies: ReadonlyArray<{
    name: string;
    category: string;
    color: string;
  }> = [
    { name: 'Go', category: 'language', color: 'text-cyan-400' },
    { name: 'Python', category: 'language', color: 'text-blue-400' },
    { name: 'C++', category: 'language', color: 'text-pink-400' },
    { name: 'Swift', category: 'language', color: 'text-orange-400' },
    { name: 'React', category: 'frontend', color: 'text-cyan-300' },
    { name: 'Angular', category: 'frontend', color: 'text-red-400' },
    { name: 'Flutter', category: 'frontend', color: 'text-blue-400' },
    { name: 'Tailwind', category: 'frontend', color: 'text-teal-400' },
    { name: 'Material UI', category: 'frontend', color: 'text-blue-500' },
    { name: 'Node.js', category: 'backend', color: 'text-green-400' },
    { name: 'Laravel', category: 'backend', color: 'text-red-500' },
    { name: 'Nginx', category: 'backend', color: 'text-green-500' },
    { name: 'Apache', category: 'backend', color: 'text-purple-400' },
    { name: 'MySQL', category: 'database', color: 'text-blue-400' },
    { name: 'PostgreSQL', category: 'database', color: 'text-blue-500' },
    { name: 'IBM i DB2', category: 'database', color: 'text-cyan-400' },
    { name: 'Figma', category: 'tool', color: 'text-purple-400' },
    { name: 'Git', category: 'tool', color: 'text-orange-500' },
    { name: 'Jira', category: 'tool', color: 'text-blue-500' },
    { name: 'Ionic', category: 'mobile', color: 'text-blue-400' },
    { name: 'Capacitor', category: 'mobile', color: 'text-indigo-400' },
  ];

  onInView(): void {
    this.visible.set(true);
  }
}
