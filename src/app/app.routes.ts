import { Routes } from '@angular/router';

import { RouteUrlEnum } from './core/enums/route-url.enum';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./features/home/home.routes').then(m => m.routes),
  },
  {
    path: '',
    loadChildren: () => import('./features/hygiene-program/hygiene-program.routes').then(m => m.routes),
  },
  {
    path: '',
    loadChildren: () => import('./features/services/services.routes').then(m => m.routes),
  },
  {
    path: '',
    loadChildren: () => import('./features/faq/faq.routes').then(m => m.routes),
  },
  {
    path: '**',
    redirectTo: RouteUrlEnum.HOME,
    pathMatch: 'full'
  }
];
