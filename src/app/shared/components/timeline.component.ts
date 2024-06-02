// shared/components/timeline.component.ts
import { NgClass } from '@angular/common';
import { booleanAttribute, Component, Input } from '@angular/core';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [
    NgClass
  ],
  template: `
      <ul 
        class="timeline"
        [ngClass]="{'timeline-vertical': vertical}"
      >
          @for (item of items; track $index; let first = $first; let last = $last) {
              <li>
                  @if (!first) { <hr/> }
                  <div class="timeline-start">{{ item.start }}</div>
                  <div class="timeline-middle">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" /></svg>
                  </div>
                  <div class="timeline-end timeline-box">{{ item.end }}</div>
                  @if (!last) { <hr/> }
              </li>
          }
      </ul>
  `,
  styles: ``
})
export class TimelineComponent {
  @Input() items: { start: string; end: string }[] = [];
  @Input({ transform: booleanAttribute }) vertical = false;
}