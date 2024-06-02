import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
  selector: 'app-share-state',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    NavbarComponent
  ],
  template: `
      <app-navbar></app-navbar>
      <div class="flex justify-center gap-2">
        <button class="btn" routerLinkActive="text-sky-400" routerLink="home">Home</button>
        <button class="btn" routerLinkActive="text-sky-400" routerLink="settings">settings</button>
        <button class="btn" routerLinkActive="text-sky-400" routerLink="cart">cart</button>
      </div>
      
      <div class="my-5 flex justify-center">
          <div class="w-full">
            <router-outlet />
          </div>
      </div>
  `,
  styles: ``
})
export default class ShareStateComponent {

}
