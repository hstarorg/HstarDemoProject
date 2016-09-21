import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { routing }   from './lazy-load.routing';

import { LazyLoadComponent } from './app/lazy-load.component';

@NgModule({
  imports: [CommonModule, routing],
  declarations: [LazyLoadComponent],
  exports: [],
  providers: [],
})
export class LazyLoadModule { }

