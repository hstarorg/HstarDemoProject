import { NgModule } from '@angular/core';
import { CommonModule }  from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { todoListRouting } from './todo-list.routing';
import { TodoService } from './services/todo.service';
import { ObjectToArrayPipe } from './pipes/object-to-array.pipe';
import { TodoListComponent, TodoDetailComponent } from './pages';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    todoListRouting
  ],
  declarations: [TodoListComponent, TodoDetailComponent, ObjectToArrayPipe],
  exports: [ObjectToArrayPipe],
  providers: [TodoService]
})
export class TodoListModule {

};