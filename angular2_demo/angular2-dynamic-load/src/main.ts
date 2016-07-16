import { enableProdMode } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';
import {HTTP_PROVIDERS} from '@angular/http';

import { appRouterProviders } from './app.routes';
import { AppComponent } from './app.component';

// enableProdMode();

bootstrap(AppComponent, [
  ...HTTP_PROVIDERS,
  appRouterProviders
])
  .then(success => console.log(`Bootstrap success`))
  .catch(error => console.log(error));
