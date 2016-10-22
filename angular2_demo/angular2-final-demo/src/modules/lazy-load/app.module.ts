import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { routing }   from './app.routing';

import { LazyLoadComponent } from './app/lazy-load.component';

@NgModule({
  imports: [CommonModule, routing],
  declarations: [LazyLoadComponent],
  exports: [],
  providers: [],
})
export class AppModule { }

