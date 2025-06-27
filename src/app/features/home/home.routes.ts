import { Routes } from '@angular/router';

import { Home } from './pages/home';
import { RouteNameEnum } from '../../core/enums/route-name.enum';
import { RouteUrlEnum } from '../../core/enums/route-url.enum';

export const routes: Routes = [
  {
    path: RouteUrlEnum.HOME,
    component: Home,
    title: `Personal Cleaner - ${RouteNameEnum.HOME}`,
  },
];
