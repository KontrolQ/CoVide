import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeekHelpResultModalPage } from './seek-help-result-modal.page';

const routes: Routes = [
  {
    path: '',
    component: SeekHelpResultModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeekHelpResultModalPageRoutingModule {}
