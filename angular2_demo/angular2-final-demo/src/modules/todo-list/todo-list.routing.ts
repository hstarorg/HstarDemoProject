import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodoListComponent, TodoDetailComponent } from './pages';

const todoListRoutes: Routes = [
  { path: 'todo', component: TodoListComponent },
  { path: 'todo/:id', component: TodoDetailComponent }
];

export const todoListRouting: ModuleWithProviders = RouterModule.forChild(todoListRoutes);