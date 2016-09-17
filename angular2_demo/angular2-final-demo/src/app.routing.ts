import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent, NotFoundComponent } from './pages';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  // { path: '**', component: NotFoundComponent },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '/404', data: {} }
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);