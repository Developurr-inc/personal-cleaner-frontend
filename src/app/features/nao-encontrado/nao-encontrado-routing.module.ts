import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NaoEncontradoComponent } from './pages/nao-encontrado/nao-encontrado.component';

const routes: Routes = [
  {
    path: '**',
    component: NaoEncontradoComponent,
    title: `Personal Cleaner - Nao encontrado`,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NaoEncontradoRoutingModule { }
