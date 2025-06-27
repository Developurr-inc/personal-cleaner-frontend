import { Routes } from '@angular/router';

import { RouteNameEnum } from '../../core/enums/route-name.enum';
import { RouteUrlEnum } from '../../core/enums/route-url.enum';
import { Faq } from './pages/faq';

export const routes: Routes = [
  {
    path: RouteUrlEnum.FAQ,
    component: Faq,
    title: `Personal Cleaner - ${RouteNameEnum.FAQ}`,
  },
];
