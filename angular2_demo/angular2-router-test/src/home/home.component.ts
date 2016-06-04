import {Component} from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES} from '@angular/router-deprecated';

import {HomeAboutComponent} from './home-about.component';

@Component({
  selector: 'demo-home',
  template : `
<h1>Home</h1>
  `,
  directives: [ROUTER_DIRECTIVES] 
})

// @RouteConfig([
//   {path: '/about', name: 'HomeAbout', component: HomeAboutComponent, useAsDefault: true}
// ])

export class HomeComponent{
  constructor(){
    console.log('home init');
  }
}