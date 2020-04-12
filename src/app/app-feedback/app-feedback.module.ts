import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppFeedbackPageRoutingModule } from './app-feedback-routing.module';

import { AppFeedbackPage } from './app-feedback.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppFeedbackPageRoutingModule
  ],
  declarations: [AppFeedbackPage]
})
export class AppFeedbackPageModule {}
