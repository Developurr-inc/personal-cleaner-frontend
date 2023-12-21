import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { FaqsComponent } from './pages/faqs/faqs.component';
import { RouteUrlEnum } from './shared/enums/route-url.enum';
import { RouteNameEnum } from './shared/enums/route-name.enum';
import { AppointmentComponent } from './pages/appointment/appointment.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';

export const routes: Routes = [
  {
    path: RouteUrlEnum.HOME,
    component: HomeComponent,
    title: `Personal Cleaner - ${RouteNameEnum.HOME}`,
  },
  {
    path: RouteUrlEnum.FAQ,
    component: FaqsComponent,
    title: `Personal Cleaner - ${RouteNameEnum.FAQ}`,
  },
  {
    path: RouteUrlEnum.MESSAGE,
    component: AppointmentComponent,
    title: `Personal Cleaner - ${RouteNameEnum.MESSAGE}`,
  },
  {
    path: '**',
    component: NotfoundComponent,
    title: `Personal Cleaner - Nao encontrado`,
    pathMatch: 'full',
  },
];
