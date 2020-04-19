import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EulaModalPageRoutingModule } from './eula-modal-routing.module';

import { EulaModalPage } from './eula-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EulaModalPageRoutingModule
  ],
  declarations: [EulaModalPage]
})
export class EulaModalPageModule {}
