import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FrequentlyAskQuestionsPage } from './frequently-ask-questions.page';

const routes: Routes = [
  {
    path: '',
    component: FrequentlyAskQuestionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FrequentlyAskQuestionsPageRoutingModule {}
