import {Component} from '@angular/core';
import {RouteTree, RouteSegment, ROUTER_DIRECTIVES} from '@angular/router';

import {HomeAboutComponent} from './home-about.component';

@Component({
  selector: 'demo-home',
  template: `
<h1>Home</h1>
  `,
  directives: [ROUTER_DIRECTIVES]
})

export class HomeComponent {
  constructor() {
    console.log('home init');
  }

  routerCanDeactivate(curTree: RouteTree, futureTree: RouteTree) {
    console.log('abc');
    return new Promise((resolve, reject) => {
      resolve(true);
    });
  }

  routerOnActivate(currSegment: RouteSegment, prev: RouteSegment, currTree: RouteTree, prevTree: RouteTree){
    console.log('succeed');
  }
}