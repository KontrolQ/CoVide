import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HelplineNumbersPage } from './helpline-numbers.page';

const routes: Routes = [
  {
    path: '',
    component: HelplineNumbersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HelplineNumbersPageRoutingModule {}
