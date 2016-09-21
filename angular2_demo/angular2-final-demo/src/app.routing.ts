import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent, NotFoundComponent } from './pages';

function loadModule(): any {
  return new Promise(resolve => {
    (require as any).ensure([], require => {
      let mod = require('./modules/lazy-load/lazy-load.module').LazyLoadModule;
      console.log(mod);
      resolve(mod);
    });
  });
}

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  // { path: '**', component: NotFoundComponent },
  { path: '404', component: NotFoundComponent },
  { path: 'lazy', loadChildren: loadModule },
  { path: '**', redirectTo: '/404', data: {} }
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);