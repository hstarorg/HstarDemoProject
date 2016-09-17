import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

import { todoListRouting } from './todo-list.routing';

import { TodoService } from './services/todo-service';

import { TodoListComponent } from './pages';

@NgModule({
  imports: [
    BrowserModule,
    todoListRouting
  ],
  declarations: [TodoListComponent],
  providers: [TodoService]
})
export class TodoListModule {

};