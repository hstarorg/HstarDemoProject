import {Injector} from '@angular/core';
import { provideRouter, RouterConfig }  from '@angular/router';
import { AsyncRoute }  from '@angular/router-deprecated';
import {Http} from '@angular/http';

import {MyAppIndexComponent} from './app/index.component';
import {MyAppHomeComponent} from './app/home.component';

var injector: Injector;
console.log(injector);

const routes: RouterConfig = [{
  path: '',
  component: MyAppIndexComponent
}, {
    path: 'home',
    component: MyAppHomeComponent
  }
];

export const appRouterProviders = [
  provideRouter(routes)
];
