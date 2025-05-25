import { Routes } from '@angular/router';

import { RouteNameEnum } from '../../core/enums/route-name.enum';
import { RouteUrlEnum } from '../../core/enums/route-url.enum';

import { EquipmentsComponent } from './pages/equipments/equipments.component';
import { ProductsComponent } from './pages/products/products.component';
import { TechnicalAssistanceComponent } from './pages/technical-assistance/technical-assistance.component';
import { TrainingComponent } from './pages/training/training.component';

export const routes: Routes = [
  {
    path: RouteUrlEnum.PRODUCTS,
    component: ProductsComponent,
    title: `Personal Cleaner - ${RouteNameEnum.PRODUCTS}`,
  },
  {
    path: RouteUrlEnum.TECHNICAL_ASSISTANCE,
    component: TechnicalAssistanceComponent,
    title: `Personal Cleaner - ${RouteNameEnum.TECHNICAL_ASSISTANCE}`,
  },
  {
    path: RouteUrlEnum.TRAINING,
    component: TrainingComponent,
    title: `Personal Cleaner - ${RouteNameEnum.TRAINING}`,
  },
  {
    path: RouteUrlEnum.EQUIPMENTS,
    component: EquipmentsComponent,
    title: `Personal Cleaner - ${RouteNameEnum.EQUIPMENTS}`,
  },
];
