import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FrequentlyAskQuestionsPageRoutingModule } from './frequently-ask-questions-routing.module';

import { FrequentlyAskQuestionsPage } from './frequently-ask-questions.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FrequentlyAskQuestionsPageRoutingModule
  ],
  declarations: [FrequentlyAskQuestionsPage]
})
export class FrequentlyAskQuestionsPageModule {}
