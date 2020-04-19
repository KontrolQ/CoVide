import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EulaModalPage } from './eula-modal.page';

const routes: Routes = [
  {
    path: '',
    component: EulaModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EulaModalPageRoutingModule {}
