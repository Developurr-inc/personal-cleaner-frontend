import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProdutosComponent } from './pages/produtos/produtos.component';
import { AssistenciaTecnicaComponent } from './pages/assistencia-tecnica/assistencia-tecnica.component';
import { TreinamentoComponent } from './pages/treinamento/treinamento.component';
import { EquipamentosComponent } from './pages/equipamentos/equipamentos.component';
import { RouteUrlEnum } from '../../core/enums/route-url.enum';
import { RouteNameEnum } from '../../core/enums/route-name.enum';

const routes: Routes = [
  {
    path: RouteUrlEnum.PRODUCTS,
    component: ProdutosComponent,
    title: `Personal Cleaner - ${RouteNameEnum.PRODUCTS}`,
  },
  {
    path: RouteUrlEnum.TECHNICAL_ASSISTANCE,
    component: AssistenciaTecnicaComponent,
    title: `Personal Cleaner - ${RouteNameEnum.TECHNICAL_ASSISTANCE}`,
  },
  {
    path: RouteUrlEnum.TRAINING,
    component: TreinamentoComponent,
    title: `Personal Cleaner - ${RouteNameEnum.TRAINING}`,
  },
  {
    path: RouteUrlEnum.EQUIPMENTS,
    component: EquipamentosComponent,
    title: `Personal Cleaner - ${RouteNameEnum.EQUIPMENTS}`,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicosRoutingModule { }
