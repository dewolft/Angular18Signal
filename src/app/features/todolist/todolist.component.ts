import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { TodosService } from './pages/signal/services/todos.service';

@Component({
  selector: 'app-todolist',
  standalone: true,
  providers:  [TodosService],
  imports: [RouterOutlet, RouterLinkActive, RouterLink],
  template: `

      <h1>Todolist</h1>

      <div class="flex justify-center gap-2">
        <button class="btn" routerLinkActive="text-sky-400" routerLink="classic">Classic</button>
        <button class="btn" routerLinkActive="text-sky-400" routerLink="signal">Signal</button>
      </div>
      
      <div class="my-5 flex justify-center">
          <div class="w-full">
            <router-outlet />
          </div>
      </div>
  `,
  styles: ``
})
export default class TodolistComponent {

}
