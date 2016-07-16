import { Component, OnInit } from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  template: `
  <h1>App Component</h1>
  <ul>
    <li><a [routerLink]="['/home']">Load ModuleA</a></li>
  </ul>
  <router-outlet></router-outlet>
  `,
  directives: [ROUTER_DIRECTIVES],
  providers: []
})
export class AppComponent implements OnInit {
  constructor() { }
  ngOnInit() { }

}