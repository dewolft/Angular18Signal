// app.component.ts
import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { mocktodo } from './mockdata/data';
import { Todo } from '../../../../model/todo'; 


@Component({
  selector: 'app-todolist-classic',
  standalone: true,
  imports: [
    CommonModule
  ],
  template: `
    <div class="centered-page sm flex flex-col gap-3">
        
      <h1 class="page-title">CLASSIC WITH MOCKDATA</h1>
      <input #todoInput (keydown.enter)="addTodo(todoInput)">

      <div *ngFor="let todo of todoSig()" class="form-control" >
        <label class="label cursor-pointer">
          <input (click)="updateTodo(todo.id)" type="checkbox" [checked]="todo.completed" class="checkbox checkbox-primary" />
          <span>
            <span class="label-text">{{todo.title}}</span>
          </span> 
          <button (click)="delTodo(todo.id)">delete</button>
        </label>
      </div>

    </div>

    <pre>{{todoSig() | json}}</pre>

  `,
  styles: `
    
  
  `
})


export default class AppTodoListClassic {
  todos : Todo[] = [...mocktodo] ;
  todoSig = signal<Todo[]>([]) ;

  constructor() {
    this.todoSig.set(mocktodo)
  }


addTodo(event : HTMLInputElement){
  //console.log(event.value) ;
  var newTodo : Todo = {id : Date.now().toString() , title : event.value , completed : false} ;
  //this.todos = [...this.todos, newTodo]
  this.todoSig.update(todo => [...todo, newTodo])
  event.value = "" ;
}

delTodo(id : string){
  // ritorno un nuovo oggetto filtrato senza l'ID passato in input alla funzione
  //this.todos = this.todos.filter(todo => todo.id !== id) ;
  this.todoSig.update(t => t.filter(t => t.id !== id))
}

updateTodo(id : string){

  // Metodo con ricerca tramite ID
  //const indexId = this.todos.findIndex(todo => todo.id === id) ;
  //this.todos[indexId].completo = !this.todos[indexId].completo ;

  // Metodo con MAP
  //this.todos = this.todos.map(todo => {
  //  return todo.id === id ? {...todo, completo: !todo.completo} : todo;
  //})


  // CON I SIGNAL

  // .map ritorna un nuovo oggetto, che itera per ogni todo nell'array, nel return torno il singolo Todo, se corrisponde all'ID lo aggiorno, altrimenti lo ripasso cosi com'è
  //this.todoSig.update(todo => todo.map(todo => {
  //  return todo.id === id ? {...todo, completo: !todo.completo} : todo;
  //}))

  // Oppure metodo classico
  this.todoSig.update(todo => {
    const indexId = todo.findIndex(todo => todo.id === id) ;
    todo[indexId].completed = !todo[indexId].completed ;
    return [...todo]
  } )

}

}



