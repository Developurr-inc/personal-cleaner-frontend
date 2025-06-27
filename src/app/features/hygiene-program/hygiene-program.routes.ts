import { Routes } from '@angular/router';

import { RouteNameEnum } from '../../core/enums/route-name.enum';
import { RouteUrlEnum } from '../../core/enums/route-url.enum';
import { HygieneProgram } from './pages/hygiene-program';

export const routes: Routes = [
  {
    path: RouteUrlEnum.IMPLEMENTATION,
    component: HygieneProgram,
    title: `Personal Cleaner - ${RouteNameEnum.IMPLEMENTATION}`,
  },
];
