import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { FaqsComponent } from './pages/faqs/faqs.component';
import { RouteUrlEnum } from './shared/enums/route-url.enum';
import { RouteNameEnum } from './shared/enums/route-name.enum';
import { ProductsComponent } from './pages/products/products.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { TechnicalAssistanceComponent } from './pages/technical-assistance/technical-assistance.component';
import { TrainingComponent } from './pages/training/training.component';
import { EquipmentsComponent } from './pages/equipments/equipments.component';
import { ImplementationComponent } from './pages/implementation/implementation.component';

export const routes: Routes = [
  {
    path: RouteUrlEnum.HOME,
    component: HomeComponent,
    title: `Personal Cleaner - ${RouteNameEnum.HOME}`,
  },
  {
    path: RouteUrlEnum.FAQ,
    component: FaqsComponent,
    title: `Personal Cleaner - ${RouteNameEnum.FAQ}`,
  },
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
  {
    path:RouteUrlEnum.IMPLEMENTATION,
    component: ImplementationComponent,
    title:`Personal Cleaner - ${RouteNameEnum.IMPLEMENTATION}`
  },
  {
    path: '**',
    component: NotfoundComponent,
    title: `Personal Cleaner - Nao encontrado`,
    pathMatch: 'full',
  },
];
