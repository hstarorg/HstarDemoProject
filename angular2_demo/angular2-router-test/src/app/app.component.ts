import {Component, provide} from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouterLink} from '@angular/router-deprecated';

import {CustomRouterOutlet} from './../libs/customRouterOutlet';
import {HomeComponent} from './../home/home.component';
import {AboutComponent} from './../about/about.component';

@Component({
  selector: 'demo-app',
  template: `
<h3>Hello, Angular2 and Webpack.</h3>
<button [routerLink]="['Home']">Home</button>
<button [routerLink]="['About']">About</button> 
<router-outlet></router-outlet>
  `,
  directives: [CustomRouterOutlet, RouterLink],
  providers: [ROUTER_PROVIDERS]
})

@RouteConfig([
  { path: '/home', name: 'Home', component: HomeComponent, useAsDefault: true },
  { path: '/about/...', name: 'About', component: AboutComponent },
  { path: '/**', redirectTo: ['Home'] }
])

export class AppComponent {
  constructor() {
    console.log('app init');
  }
}