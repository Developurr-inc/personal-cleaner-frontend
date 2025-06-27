import { Routes } from '@angular/router';

import { RouteNameEnum } from '../../core/enums/route-name.enum';
import { RouteUrlEnum } from '../../core/enums/route-url.enum';

import { Equipments } from './pages/equipments/equipments';
import { Products } from './pages/products/products';
import { TechnicalAssistance } from './pages/technical-assistance/technical-assistance';
import { Training } from './pages/training/training';

export const routes: Routes = [
  {
    path: RouteUrlEnum.PRODUCTS,
    component: Products,
    title: `Personal Cleaner - ${RouteNameEnum.PRODUCTS}`,
  },
  {
    path: RouteUrlEnum.TECHNICAL_ASSISTANCE,
    component: TechnicalAssistance,
    title: `Personal Cleaner - ${RouteNameEnum.TECHNICAL_ASSISTANCE}`,
  },
  {
    path: RouteUrlEnum.TRAINING,
    component: Training,
    title: `Personal Cleaner - ${RouteNameEnum.TRAINING}`,
  },
  {
    path: RouteUrlEnum.EQUIPMENTS,
    component: Equipments,
    title: `Personal Cleaner - ${RouteNameEnum.EQUIPMENTS}`,
  },
];
