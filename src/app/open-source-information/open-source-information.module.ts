import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OpenSourceInformationPageRoutingModule } from './open-source-information-routing.module';

import { OpenSourceInformationPage } from './open-source-information.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OpenSourceInformationPageRoutingModule
  ],
  declarations: [OpenSourceInformationPage]
})
export class OpenSourceInformationPageModule {}
