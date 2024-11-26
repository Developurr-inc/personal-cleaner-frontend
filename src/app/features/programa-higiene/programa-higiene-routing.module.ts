import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RouteUrlEnum } from '../../core/enums/route-url.enum';
import { RouteNameEnum } from '../../core/enums/route-name.enum';
import {ProgramaHigieneComponent} from "./pages/programa-higiene.component";

const routes: Routes = [
  {
    path: RouteUrlEnum.IMPLEMENTATION,
    component: ProgramaHigieneComponent,
    title: `Personal Cleaner - ${RouteNameEnum.IMPLEMENTATION}`,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProgramaHigieneRoutingModule { }
