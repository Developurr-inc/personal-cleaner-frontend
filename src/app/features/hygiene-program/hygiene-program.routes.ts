import { Routes } from '@angular/router';

import { RouteNameEnum } from '../../core/enums/route-name.enum';
import { RouteUrlEnum } from '../../core/enums/route-url.enum';
import { HygieneProgramComponent } from './pages/hygiene-program.component';

export const routes: Routes = [
  {
    path: RouteUrlEnum.IMPLEMENTATION,
    component: HygieneProgramComponent,
    title: `Personal Cleaner - ${RouteNameEnum.IMPLEMENTATION}`,
  },
];
