import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodoListComponent } from './pages';

const todoListRoutes: Routes = [
  { path: 'todo', component: TodoListComponent },
  { path: 'todo/:id', component: TodoListComponent }
];

export const todoListRouting: ModuleWithProviders = RouterModule.forChild(todoListRoutes);