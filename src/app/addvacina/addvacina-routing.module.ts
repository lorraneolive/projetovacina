import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddvacinaPage } from './addvacina.page';

const routes: Routes = [
  {
    path: '',
    component: AddvacinaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddvacinaPageRoutingModule {}
