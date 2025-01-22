// app.routes.ts (en la raíz)
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./task/routes/task.routes'),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
