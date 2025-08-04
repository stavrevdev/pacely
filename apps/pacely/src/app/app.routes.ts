import { Route } from '@angular/router';

import { tasksRoutes } from './tasks/tasks.routes';

export const appRoutes: Route[] = [
  {
    path: 'tasks',
    loadComponent: () => import('./tasks/tasks').then((c) => c.Tasks),
    children: tasksRoutes,
  },
];
