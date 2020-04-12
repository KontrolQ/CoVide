import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SymptomsPage } from './symptoms.page';

const routes: Routes = [
  {
    path: '',
    component: SymptomsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SymptomsPageRoutingModule {}
