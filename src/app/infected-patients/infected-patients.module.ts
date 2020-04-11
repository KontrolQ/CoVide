import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfectedPatientsPageRoutingModule } from './infected-patients-routing.module';

import { InfectedPatientsPage } from './infected-patients.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfectedPatientsPageRoutingModule
  ],
  declarations: [InfectedPatientsPage]
})
export class InfectedPatientsPageModule {}
