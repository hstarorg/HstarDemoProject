import {Component, provide} from '@angular/core';
import {Routes, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Router, RouteTree} from '@angular/router';

import {HomeComponent} from './../home/home.component';
import {AboutComponent} from './../about/about.component';

@Component({
  selector: 'demo-app',
  template: `
<h3>Angular2 Router Test</h3>
<a [routerLink]="['/home']">Home</a>
<a [routerLink]="['/about', {id: 1}]">About</a> 
<a href="#" (click)="goAbout($event)">代码控制跳转</a>
<router-outlet></router-outlet>
  `,
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS]
})

@Routes([
  { path: '/', component: HomeComponent },
  { path: '/home', component: HomeComponent },
  { path: '/about', component: AboutComponent }
])

export class AppComponent {
  constructor(private router: Router) {
    console.log('app init');
  }

  goAbout(evt) {
    evt.preventDefault();
    console.log(evt);
    this.router.navigateByUrl('/about/me');
  }

  routerCanDeactivate(curTree: RouteTree, futureTree: RouteTree){
    console.log('abc');
    return new Promise((resolve, reject) => {
      resolve(false);
    });
  }
}