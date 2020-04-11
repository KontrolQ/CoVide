import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TravelHistoryPage } from './travel-history.page';

const routes: Routes = [
  {
    path: '',
    component: TravelHistoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TravelHistoryPageRoutingModule {}
