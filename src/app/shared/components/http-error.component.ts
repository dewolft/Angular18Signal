import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TodosService } from '../../features/todolist/pages/signal/services/todos.service';

@Component({
  selector: 'app-http-error',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `
      <div class="bg-red-400 rounded-xl p-3 text-black">
          {{ msg }}
      </div>
  `,
  styles: ``
})
export class HttpErrorComponent {
  @Input() msg = ''
}
