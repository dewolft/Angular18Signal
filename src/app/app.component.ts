import { Component, inject } from '@angular/core';
import { NavbarComponent } from './core/components/navbar.component';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    RouterOutlet
  ],
  template: `
    <app-navbar></app-navbar>
      <div class="card max-w-screen-xl m-2 lg:mx-auto shadow-xl p-4">
        <router-outlet></router-outlet>     
      </div>
  `,
})
export class AppComponent {
  router = inject(Router) ;
  
  constructor() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0);
        console.log(event)  
      }
    });
  }

}