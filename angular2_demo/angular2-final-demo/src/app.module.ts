import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { routing, appRoutingProviders } from './app.routing';

import { AppComponent, HomeComponent, NotFoundComponent } from './pages';

import { TodoListModule } from './modules/todo-list/todo-list.module';

@NgModule({
  imports: [
    BrowserModule, RouterModule,
    routing,
    TodoListModule
  ],
  declarations: [AppComponent, HomeComponent, NotFoundComponent],
  bootstrap: [AppComponent]
})
export class AppModule {

};