import { Component, OnInit, HostBinding, trigger, state, style, transition, animate } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Todo } from './../services/todo';
import { TodoService } from './../services/todo.service';

@Component({
  template: require('./todo-detail.html'),
  animations: [
    trigger('routeAnimation', [
      state('*', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translateX(-100%)'
        }),
        animate('5s ease-in')
      ]),
      transition('* => void', [
        animate('5s ease-out', style({
          opacity: 0,
          transform: 'translateY(100%)'
        }))
      ])
    ])
  ]
})
export class TodoDetailComponent implements OnInit {

  @HostBinding('@routeAnimation') get routeAnimation() {
    return true;
  }

  @HostBinding('style.display') get display() {
    return 'block';
  }

  @HostBinding('style.position') get position() {
    return 'absolute';
  }

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