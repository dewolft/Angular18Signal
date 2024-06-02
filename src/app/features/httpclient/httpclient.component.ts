import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-httpclient',
  standalone: true,
  imports: [RouterOutlet,RouterLink,RouterLinkActive],
  template: `
      <div class="flex justify-center">
        <button class="btn" routerLinkActive="text-sky-400" routerLink="http1">http1</button>
        <button class="btn" routerLinkActive="text-sky-400" routerLink="http-signal">httpSignal</button>
        <button class="btn" routerLinkActive="text-sky-400" routerLink="http-rxjs">httpRxjs</button>
      </div>
      
      <div class="my-5 flex justify-center">
          <div class="w-full">
            <router-outlet />
          </div>
      </div>
        `,
  styles: ``
})
export default class HttpclientComponent {


}
