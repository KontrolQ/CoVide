import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DistrictWisePage } from './district-wise.page';

const routes: Routes = [
  {
    path: '',
    component: DistrictWisePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DistrictWisePageRoutingModule {}
