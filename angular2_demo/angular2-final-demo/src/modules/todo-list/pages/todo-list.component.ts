import { Component, OnInit } from '@angular/core';
import { Subject, Observable } from 'rxjs';

import { Todo } from './../services/todo';
import { TodoService } from './../services/todo.service';

@Component({
  template: require('./todo-list.html')   
})
export class TodoListComponent implements OnInit {

  private todos: Todo[];

  private todos2: Observable<Todo[]>;

  private titles: {};

  private todoDescription: string = '';

  private keyword: string = '';

  private searchTerms = new Subject<string>();

  constructor(private todoService: TodoService) {

  }



  ngOnInit() {
    // this.todos = this.todoService.getTodos();
    this.todoService.getTodosAsync()
      // this.todoService.getTodosFromRemote()
      .then(todos => this.todos = todos);
    console.log('init');

    this.titles = {
      't1': 'title1',
      't2': 'title2'
    };


    this.todos2 = this.searchTerms
      .debounceTime(300)
      .distinctUntilChanged()
      .switchMap(term => {
        return term ? this.todoService.searchTodo(term) : Observable.of<Todo[]>([]);
      }).catch(error => {
        return Observable.of<Todo[]>([]);
      })
  }

  public keyPress(evt: KeyboardEvent) {
    this.addTodo();
  }

  public search(keyword: string) {
    console.log(keyword);
    this.searchTerms.next(keyword);
  }

  private addTodo() {
    this.todoService.saveTodo(new Todo(this.todoDescription));
    this.todoDescription = '';
    this.ngOnInit();
  }

  public addTitle(){
    this.titles['t3'] = 'Good';
  }
}