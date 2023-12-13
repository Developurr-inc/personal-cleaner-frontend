import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { ExpertiseComponent } from './pages/expertise/expertise.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { RouteUrlEnum } from './shared/enums/route-url.enum';
import { RouteNameEnum } from './shared/enums/route-name.enum';
import { CtaComponent } from './pages/cta/cta.component';

export const routes: Routes = [
  {
    path: RouteUrlEnum.HOME,
    component: HomeComponent,
    title: `Personal Cleaner - ${RouteNameEnum.HOME}`,
  },
  {
    path: RouteUrlEnum.ABOUT_US,
    component: AboutUsComponent,
    title: `Personal Cleaner - ${RouteNameEnum.ABOUT_US}`,
  },
  {
    path: RouteUrlEnum.CTA,
    component: CtaComponent,
    title: `Personal Cleaner - ${RouteNameEnum.CTA}`,
  },
  {
    path: RouteUrlEnum.EXPERTISE,
    component: ExpertiseComponent,
    title: `Personal Cleaner - ${RouteNameEnum.EXPERTISE}`,
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];
