import { Routes } from '@angular/router';

export default [
  {
    path: 'task-list',
    loadComponent: () => import('../task-list/task-list.component'),
  },
  {
    path: 'task-form/:id',
    loadComponent: () => import('../task-form/task-form.component'),
  },
] as Routes;
