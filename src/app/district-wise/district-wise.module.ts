import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DistrictWisePageRoutingModule } from './district-wise-routing.module';

import { DistrictWisePage } from './district-wise.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DistrictWisePageRoutingModule
  ],
  declarations: [DistrictWisePage]
})
export class DistrictWisePageModule {}
