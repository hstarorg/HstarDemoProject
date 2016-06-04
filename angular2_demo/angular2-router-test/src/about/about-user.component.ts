import {Component} from '@angular/core';
import {RouteSegment} from '@angular/router';

@Component({
  selector: 'demo-about-user',
  template: `
  <h1>About User</h1>
  `,
  directives: []
})

export class AboutUserComponent {
  constructor(private segment: RouteSegment) {
    console.log('about user init');
    console.log(segment.parameters, segment, segment.getParam('id'));
  }
}