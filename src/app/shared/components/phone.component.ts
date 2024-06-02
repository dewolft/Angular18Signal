// shared/phone.component.ts
import { booleanAttribute, Component, Input, numberAttribute } from '@angular/core';

@Component({
  selector: 'app-phone',
  standalone: true,
  imports: [],
  template: `
  <!-- shared/phone.component.html -->

<div class="mockup-phone">
  <div class="camera"></div>
  <div class="display">
    <div class="artboard artboard-demo phone-1">
      <img
        [src]="url"
        [alt]="alt"
        [style.width.%]="size"
      >
      @if(showTitle) {
        <div>{{ alt }}</div>
      }
    </div>
  </div>
</div>
  `,
  styles: ``,
  



})
export class PhoneComponent {
  @Input({ alias: 'src', required: true })
  url: string = ''

  @Input({ transform: (val: string) => {
    return val.toUpperCase()
  }})
  alt: string = 'image'

  @Input({ transform: booleanAttribute})
  showTitle = false;

  @Input({ transform: (val: 'sm' | 'md' | 'xl') => {
      switch (val) {
        case 'sm': return 50;
        case 'md': return 75;
        default:
        case 'xl': return 100;
      }
  }})
  size = 100
}