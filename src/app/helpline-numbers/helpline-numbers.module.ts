import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HelplineNumbersPageRoutingModule } from './helpline-numbers-routing.module';

import { HelplineNumbersPage } from './helpline-numbers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HelplineNumbersPageRoutingModule
  ],
  declarations: [HelplineNumbersPage]
})
export class HelplineNumbersPageModule {}
