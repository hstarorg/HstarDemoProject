import { Component, OnInit } from '@angular/core';

import { Todo } from './../services/todo';
import { TodoService } from './../services/todo-service';

@Component({
  selector: 'todo-list',
  template: require('./todo-list.html')
})
export class TodoListComponent implements OnInit {
  todos: Todo[];

  constructor() {
    this.todos = [
      new Todo('User1'),
      new Todo('Test2'),
      new Todo('GGG3')
    ]
  }

  ngOnInit() {
    console.log('init');
  }
}