import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { AppointmentComponent } from './pages/appointment/appointment.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { RouteUrlEnum } from './shared/enums/route-url.enum';
import { RouteNameEnum } from './shared/enums/route-name.enum';
import { FaqComponent } from './pages/faq/faq.component';

export const routes: Routes = [

  {
    path: RouteUrlEnum.HOME,
    component: HomeComponent,
    title: `Personal Cleaner - ${RouteNameEnum.HOME}`,
  },
  {
    path: RouteUrlEnum.APPOINTMENT,
    component: AppointmentComponent,
    title: `Personal Cleaner - ${RouteNameEnum.APPOINTMENT}`,
  },
  {
    path: RouteUrlEnum.CONTACT_US,
    component: ContactUsComponent,
    title: `Personal Cleaner - ${RouteNameEnum.CONTACT_US}`,
  },
  {
    path: RouteUrlEnum.ABOUT_US,
    component: AboutUsComponent,
    title: `Personal Cleaner - ${RouteNameEnum.ABOUT_US}`,
  },
  {
    path: 'faq',
    component: FaqComponent,
    title: `Personal Cleaner - ${RouteNameEnum.FAQ}`,
  },
      {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  },
];
