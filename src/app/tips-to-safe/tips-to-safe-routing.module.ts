import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TipsToSafePage } from './tips-to-safe.page';

const routes: Routes = [
  {
    path: '',
    component: TipsToSafePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TipsToSafePageRoutingModule {}
