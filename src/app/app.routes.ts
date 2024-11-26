import { Routes } from '@angular/router';

import { FaqsComponent } from './pages/faqs/faqs.component';
import { RouteUrlEnum } from './core/enums/route-url.enum';
import { RouteNameEnum } from './core/enums/route-name.enum';
import { ProgramaHigieneComponent } from './features/programa-higiene/pages/programa-higiene.component';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule)
  },
  {
    path: '',
    loadChildren: () => import('./features/servicos/servicos.module').then(m => m.ServicosModule)
  },
  {
    path: '',
    loadChildren: () => import('./features/programa-higiene/programa-higiene.module').then(m => m.ProgramaHigieneModule)
  },
  {
    path: RouteUrlEnum.FAQ,
    component: FaqsComponent,
    title: `Personal Cleaner - ${RouteNameEnum.FAQ}`,
  },
  {
    path: '',
    loadChildren: () => import('./features/nao-encontrado/nao-encontrado.module').then(m => m.NaoEncontradoModule)
  }
];
