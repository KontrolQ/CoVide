import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotificationsModalPage } from './notifications-modal.page';

const routes: Routes = [
  {
    path: '',
    component: NotificationsModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotificationsModalPageRoutingModule {}
