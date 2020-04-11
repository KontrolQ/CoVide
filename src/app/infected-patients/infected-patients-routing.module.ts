import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfectedPatientsPage } from './infected-patients.page';

const routes: Routes = [
  {
    path: '',
    component: InfectedPatientsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfectedPatientsPageRoutingModule {}
