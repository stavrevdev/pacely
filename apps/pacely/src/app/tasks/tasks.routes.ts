import { Route } from '@angular/router';

export const tasksRoutes: Route[] = [
  {
    path: '',
    loadComponent: () => import('./list/list').then((c) => c.TasksList),
  },
];
