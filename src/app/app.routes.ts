import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { FaqsComponent } from './pages/faqs/faqs.component';
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
    path: RouteUrlEnum.FAQS,
    component:FaqsComponent,
    title: `Personal Cleaner - ${RouteNameEnum.FAQS}`
  },
  {
    path: RouteUrlEnum.APPOINTMENT,
    component:AppointmentComponent,
    title: `Personal Cleaner - ${RouteNameEnum.APPOINTMENT}`
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];
