import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { RouteUrlEnum } from './shared/enums/route-url.enum';
import { RouteNameEnum } from './shared/enums/route-name.enum';
import { AppointmentComponent } from './pages/appointment/appointment.component';

export const routes: Routes = [
  {
    path: RouteUrlEnum.HOME,
    component: HomeComponent,
    title: `Personal Cleaner - ${RouteNameEnum.HOME}`,
  },
  {
    path: RouteUrlEnum.MESSAGE,
    component: AppointmentComponent,
    title: `Personal Cleaner - ${RouteNameEnum.MESSAGE}`,
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];
