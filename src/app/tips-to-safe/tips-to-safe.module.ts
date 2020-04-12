import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TipsToSafePageRoutingModule } from './tips-to-safe-routing.module';

import { TipsToSafePage } from './tips-to-safe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TipsToSafePageRoutingModule
  ],
  declarations: [TipsToSafePage]
})
export class TipsToSafePageModule {}
