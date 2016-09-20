import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { todoListRouting } from './todo-list.routing';
import { TodoService } from './services/todo.service';
import { TodoListComponent, TodoDetailComponent } from './pages';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    todoListRouting
  ],
  declarations: [TodoListComponent, TodoDetailComponent],
  providers: [TodoService]
})
export class TodoListModule {

};