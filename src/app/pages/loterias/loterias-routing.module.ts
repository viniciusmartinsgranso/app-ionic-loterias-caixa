import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoteriasHomePage } from './loterias-home/loterias-home.page';
import { ListConcursosComponent } from "./list-concursos/list-concursos.component";
import { ConcursoComponent } from "./concurso/concurso.component";

const routes: Routes = [
  {
    path: '',
    component: LoteriasHomePage
  },
  {
    path: ':loteria',
    component: ListConcursosComponent
  },
  {
    path: ':loteria/:concurso',
    component: ConcursoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoteriasPageRoutingModule {}
