import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Todo } from './../services/todo';
import { TodoService } from './../services/todo.service';

@Component({
  template: require('./todo-detail.html')
})
export class TodoDetailComponent implements OnInit {

  private todo: Todo;

  constructor(
    private todoService: TodoService,
    private route: ActivatedRoute,
    private router: Router) {
      console.log('cons');
  }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      console.log('route');
      let id = params['id'];
      this.todoService.getTodo(id).then(todo => {
        this.todo = todo;
      });
    });
  }

  setRoute() {
    this.router.navigateByUrl('/todo/06de12c232087d');
  }
}