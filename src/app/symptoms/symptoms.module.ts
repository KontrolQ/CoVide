import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SymptomsPageRoutingModule } from './symptoms-routing.module';

import { SymptomsPage } from './symptoms.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SymptomsPageRoutingModule
  ],
  declarations: [SymptomsPage]
})
export class SymptomsPageModule {}
