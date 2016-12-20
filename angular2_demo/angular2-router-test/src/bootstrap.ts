import {provide} from '@angular/core';
import {bootstrap} from '@angular/platform-browser-dynamic';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';

import {AppComponent} from './app/app.component';

bootstrap(AppComponent, [
  provide(LocationStrategy, { useClass: HashLocationStrategy })
]);