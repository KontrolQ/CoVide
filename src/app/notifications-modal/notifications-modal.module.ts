import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotificationsModalPageRoutingModule } from './notifications-modal-routing.module';

import { NotificationsModalPage } from './notifications-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotificationsModalPageRoutingModule
  ],
  declarations: [NotificationsModalPage]
})
export class NotificationsModalPageModule {}
