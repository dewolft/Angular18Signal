// core/components/navbar.ts
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  template: `
      <div class="navbar bg-base-100">
          <div class="flex-1">
              <a class="btn btn-ghost text-xl">Angular Training</a>
          </div>
          <div class="flex-none">
              <ul class="menu menu-horizontal px-1">
                  <li routerLink="share-state" routerLinkActive="text-sky-400"><a>Share State</a></li>
                  <li routerLink="todolist" routerLinkActive="text-sky-400"><a>ToDo List</a></li>
                  <li routerLink="httpClient" routerLinkActive="text-sky-400"><a>Http Client</a></li>
                  <li routerLink="uikit" routerLinkActive="text-sky-400"><a>Ui Kit</a></li>
              </ul>
          </div>
      </div>
  `,
  styles: ``
})
export class NavbarComponent {

}