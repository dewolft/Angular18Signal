import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, output, signal } from '@angular/core';
import { Todo } from '../../../../../model/todo';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todos-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule],
  template: `
          <ul>
              @for (todo of todos; track todo.id) {
                  <li class="flex justify-between gap-3 mb-2">
                      <div class="flex gap-3">
                        <input 
                        class="checkbox checkbox-primary"
                          type="checkbox" [checked]="todo.completed"
                          (change)="toggleTodo.emit(todo)"
                        >
                        <span [ngClass]="{'line-through': todo.completed}">
                            {{todo.title}}
                        </span>
                      </div>
                      <button (click)="removeTodo.emit(todo)">❌</button>
                  </li>
              }
          </ul>

          <br>
          <pre>{{todos | json}}</pre>
  `,
  styles: ``
})
export class TodosListComponent {
  @Input() todos: Todo[] = [] ;

  @Output() toggleTodo = new EventEmitter<Todo>();
  @Output() removeTodo = new EventEmitter<Todo>();

}
