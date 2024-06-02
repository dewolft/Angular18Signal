import { AsyncPipe, JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { User } from '../../../../model/user';

@Component({
  selector: 'app-http1',
  standalone: true,
  imports: [JsonPipe, AsyncPipe],
  template: `
      <h1>HttpClient Demo</h1>

      @for(user of users$ | async; track user.id) {
        <li>{{user.name}}</li>
      }

        `,
  styles: ``
})
export default class HttpclientComponent {
  http = inject(HttpClient) ;
  users$ = this.http.get<User[]>('https://jsonplaceholder.typicode.com/users') ;

  // si può usare anche in questa configurazione
  // userGet$ = inject(HttpClient)
  //   .get<User[]>('https://jsonplaceholder.typicode.com/users') ;


}
