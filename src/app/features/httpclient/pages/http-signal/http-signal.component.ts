import { Component, Input, inject, signal } from '@angular/core';
import { User } from '../../../../model/user';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-http-signal',
  standalone: true,
  imports: [],
  template: `
      <h1>HttpClient Demo</h1>

      @for(user of users() ; track user.id) {
        <li>{{user.name}} - {{user.address.city}}</li>
      }
  `,
  styles: ``
})
export default class HttpSignalComponent {
  
  users = signal<User[]>([]);
  http = inject(HttpClient) ;

  constructor() {
    this.http.get<User[]>('https://jsonplaceholder.typicode.com/users').subscribe(users => {
      this.users.set(users);
    })
  }

}
