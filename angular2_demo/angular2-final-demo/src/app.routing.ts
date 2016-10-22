import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent, NotFoundComponent } from './pages';

function loadModule(moduleName): any {
  return () => {
    return new Promise(resolve => {
      resolve(window['newkit'][moduleName].AppModule);
    });
  };
}

const appRoutes: Routes = [
  { path: '404', component: NotFoundComponent },
  { path: 'lazy', loadChildren: loadModule('lazy-load') },
  { path: '', component: HomeComponent },
  { path: '**', redirectTo: '/404', data: {} }
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);