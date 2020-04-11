import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TravelHistoryPageRoutingModule } from './travel-history-routing.module';

import { TravelHistoryPage } from './travel-history.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TravelHistoryPageRoutingModule
  ],
  declarations: [TravelHistoryPage]
})
export class TravelHistoryPageModule {}
