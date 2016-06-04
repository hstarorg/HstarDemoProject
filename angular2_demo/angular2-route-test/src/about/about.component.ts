import {Component} from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES} from '@angular/router-deprecated';

import {AboutUserComponent} from './about-user.component';
import {AboutMeComponent} from './about-me.component';

@Component({
  selector: 'demo-about',
  template : `
  <h1>About</h1>
<a [routerLink]="['Home']">Go to Home</a>
<a [routerLink]="['AboutMe']">Go to AboutMe</a>
<router-outlet></router-outlet>
  `,
  directives: [ROUTER_DIRECTIVES] 
})

@RouteConfig([
  {path: '/user', name: 'AboutUser', component: AboutUserComponent, useAsDefault: true},
  {path: '/me', name: 'AboutMe', component: AboutMeComponent}
])

export class AboutComponent{
  constructor(){
    console.log('about init');
  }
}