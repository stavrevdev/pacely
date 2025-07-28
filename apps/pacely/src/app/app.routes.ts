import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'tasks',
    loadComponent: () => import('./tasks/tasks').then((c) => c.Tasks),
  },
];
