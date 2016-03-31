import {bootstrap} from 'angular2/platform/browser';
import {Component} from 'angular/core';

@Component({
  selector: 'app',
  template: 'Hello, Angular2.'
})
class AppComponent{
  constructor(){
    
  }
}

bootstrap(AppComponent);