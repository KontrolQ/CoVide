import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppFeedbackPage } from './app-feedback.page';

const routes: Routes = [
  {
    path: '',
    component: AppFeedbackPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppFeedbackPageRoutingModule {}
