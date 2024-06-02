import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpErrorComponent } from '../../../../shared/components/http-error.component'; 
import { TodosSummaryComponent } from './components/todos-summary.component';
import { TodosFormComponent } from './components/todos-form.component';
import { TodosListComponent } from './components/todos-list.component';
import { TodosService } from './services/todos.service';

@Component({
  selector: 'app-demo3',
  standalone: true,
  imports: [CommonModule, HttpErrorComponent, TodosSummaryComponent, TodosFormComponent, TodosListComponent],
  template: `
      <div class="centered-page sm flex flex-col gap-3">

          @if (this.todoServices.error()) {
              <app-http-error msg="Server error" />
          }
          
          <!--RECAP-->
          <app-todos-summary [completed]="this.todoServices.totalCompleted()" [todos]="this.todoServices.totalTodos()"/>
          
          <!--Form-->
          <app-todos-form (addTodo)="this.todoServices.addTodo($event)"/>
          
          <!--List-->
          <app-todos-list [todos]="this.todoServices.todos()" (removeTodo)="this.todoServices.removeTodo($event)" (toggleTodo)="this.todoServices.toggleTodo($event)" />

      </div>
  `,
})
export default class Demo3Component implements OnInit {
  todoServices = inject(TodosService) ;


  ngOnInit(): void {
    this.todoServices.load() ;

  }


}