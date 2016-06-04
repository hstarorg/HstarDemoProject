import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES, Routes} from '@angular/router';

import {AboutUserComponent} from './about-user.component';
import {AboutMeComponent} from './about-me.component';

@Component({
  selector: 'demo-about',
  template: `
  <h1>About</h1>
  <a [routerLink]="['/home']">Go to Home</a>
  <a [routerLink]="['./user', id]">Go to About User</a>
  <a [routerLink]="['./me']">Go to About Me</a>
  <router-outlet></router-outlet>
  `,
  directives: [ROUTER_DIRECTIVES]
})

@Routes([
  { path: '/', component: AboutUserComponent },
  { path: '/user/:id', component: AboutUserComponent },
  { path: '/me', component: AboutMeComponent }
])

export class AboutComponent {
  
  private id: number = 1;
  
  constructor() {
    console.log('about init');
  }
  
}