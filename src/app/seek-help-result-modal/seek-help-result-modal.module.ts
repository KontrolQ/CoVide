import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeekHelpResultModalPageRoutingModule } from './seek-help-result-modal-routing.module';

import { SeekHelpResultModalPage } from './seek-help-result-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeekHelpResultModalPageRoutingModule
  ],
  declarations: [SeekHelpResultModalPage]
})
export class SeekHelpResultModalPageModule {}
