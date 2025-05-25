import { Routes } from '@angular/router';

import { RouteNameEnum } from '../../core/enums/route-name.enum';
import { RouteUrlEnum } from '../../core/enums/route-url.enum';
import { FaqComponent } from './pages/faq.component';

export const routes: Routes = [
  {
    path: RouteUrlEnum.FAQ,
    component: FaqComponent,
    title: `Personal Cleaner - ${RouteNameEnum.FAQ}`,
  },
];
