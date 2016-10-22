import { RouterModule, } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { LazyLoadComponent } from './app/lazy-load.component';

export const routing: ModuleWithProviders = RouterModule.forChild([
  { path: '', component: LazyLoadComponent }
]);