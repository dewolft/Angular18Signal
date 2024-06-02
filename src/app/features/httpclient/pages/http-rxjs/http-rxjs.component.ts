import { Component, Input, inject, signal } from '@angular/core';
import { User } from '../../../../model/user';
import { HttpClient } from '@angular/common/http';
import { AsyncPipe } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import { computed } from '@angular/core';

@Component({
  selector: 'app-http-rxjs',
  standalone: true,
  imports: [AsyncPipe],
  template: `
      <h1>HttpClient Demo</h1>

      @for(user of users() ; track user.id) {
        <li>{{user.name}} - {{user.address.city}}</li>
      }
  `,
  styles: ``
})
export default class httpRxjsComponent {

  // Unisce le potenzialità dei Signal ad RXJS, tramite ToSignal è possibile convertire un Observable in un Signal
  users = toSignal( inject(HttpClient)
    .get<User[]>('https://jsonplaceholder.typicode.com/users') 
  )

  // crea una computed che restituisce un array di stringhe ottenute dal campo name di ogni utente
  names = computed(() => this.users()?.map(user => user.name))

}
