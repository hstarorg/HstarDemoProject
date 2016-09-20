import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';

import { Todo } from './todo';
import { todos } from './mock.todos';

@Injectable()
export class TodoService {

  constructor(private http: Http) {

  }

  public getTodos(): Todo[] {
    return todos;
  }

  public getTodosAsync(): Promise<Todo[]> {
    return Promise.resolve(todos);
  }

  public getTodosFromRemote(): Promise<Todo[]> {
    let url = 'http://10.16.75.25:8513/zcssw2b/todos';
    return this.http.get(url).toPromise().then(res => {
      return res.json();
    })
      .catch(this.handlerError);
  }

  public getTodo(id: string) {
    let todo = todos.find(x => x.id === id);
    return Promise.resolve(todo);
  }

  public saveTodo(todo: Todo) {
    todos.push(todo);
  }

  public searchTodo(keyword: string) {
    // return todos.filter(x => x.description.indexOf(keyword) >= 0);
    let url = 'http://10.16.75.25:8513/zcssw2b/todos';
    return this.http.get(url).map(res => {
      let data = res.json();
      return todos.filter(x => x.description.indexOf(keyword) >= 0);
    });
  }

  private handlerError(error: any) {
    console.log('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}