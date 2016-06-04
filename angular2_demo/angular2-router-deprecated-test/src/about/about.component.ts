import {Component} from '@angular/core';
import {RouteConfig, RouterLink} from '@angular/router-deprecated';

import {CustomRouterOutlet} from './../libs/customRouterOutlet';
import {AboutUserComponent} from './about-user.component';
import {AboutMeComponent} from './about-me.component';

@Component({
  selector: 'demo-about',
  template : `
  <h1>About</h1>
<a [routerLink]="['Home']">Go to Home</a>
<a [routerLink]="['AboutMe']">Go to About Me</a>
<a [routerLink]="['AboutUser']">Go to About User</a>
<router-outlet></router-outlet>
  `,
  directives: [RouterLink, CustomRouterOutlet] 
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