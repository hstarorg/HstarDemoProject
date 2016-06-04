import {Component} from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES} from '@angular/router-deprecated';

@Component({
  selector: 'demo-about-user',
  template : `
  <h1>About User</h1>
  `,
  directives: [] 
})

export class AboutUserComponent{
  constructor(){
    console.log('about user init');
  }
}