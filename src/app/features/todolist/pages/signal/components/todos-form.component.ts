import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-todos-form',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `
      <label class="input input-md input-bordered flex items-center gap-2 mt-2 mb-2">
      <input
        type="text" 
        class="grow"
        #inputRef
        (keydown.enter)="addTodo.emit(inputRef)"
        placeholder="add todo"
      >
      <kbd class="kbd kbd-sm">Enter</kbd>
      </label>
  `,
  styles: ``
})
export class TodosFormComponent {
  @Output() addTodo = new EventEmitter<HTMLInputElement>();

}