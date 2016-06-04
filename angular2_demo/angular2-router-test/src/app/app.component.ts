import {Component, provide} from '@angular/core';
import {Routes, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';

import {HomeComponent} from './../home/home.component';
import {AboutComponent} from './../about/about.component';

@Component({
  selector: 'demo-app',
  template: `
<h3>Angular2 Router Test</h3>
<a [routerLink]="['/home']">Home</a>
<a [routerLink]="['/about']">About</a> 
<router-outlet></router-outlet>
  `,
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS]
})

@Routes([
  { path: '/home', component: HomeComponent},
  { path: '/about', component: AboutComponent }
])

export class AppComponent {
  constructor() {
    console.log('app init');
  }
}