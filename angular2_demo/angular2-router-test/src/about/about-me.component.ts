import {Component} from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES} from '@angular/router-deprecated';

@Component({
  selector: 'demo-about-me',
  template : `
  <h1>About Me</h1>
  `,
  directives: [] 
})

export class AboutMeComponent{
  constructor(){
    console.log('about me init');
  }
}