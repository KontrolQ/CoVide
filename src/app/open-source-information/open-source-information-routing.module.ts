import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OpenSourceInformationPage } from './open-source-information.page';

const routes: Routes = [
  {
    path: '',
    component: OpenSourceInformationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OpenSourceInformationPageRoutingModule {}
