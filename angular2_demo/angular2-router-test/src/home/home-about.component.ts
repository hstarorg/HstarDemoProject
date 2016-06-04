import {Component} from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES} from '@angular/router-deprecated';

@Component({
  selector: 'demo-home-about',
  template : `
<h1>Home - About</h1>
 <a [routerLink]="['./About', 'About']">Go to Parent About</a>
  `,
  directives: [ROUTER_DIRECTIVES] 
})

export class HomeAboutComponent{
  constructor(){
    console.log('home-about init');
  }
}