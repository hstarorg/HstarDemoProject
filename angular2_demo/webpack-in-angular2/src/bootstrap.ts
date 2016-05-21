import {Component} from '@angular/core';
import {bootstrap} from '@angular/platform-browser-dynamic';

@Component({
  selector: 'demo-app',
  template: `
<h3>Hello, Angular2 and Webpack.</h3>
  `
})

export class AppComponent{
  constructor(){
    
  }
}

bootstrap(AppComponent);