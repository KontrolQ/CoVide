import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import * as $ from 'jquery';

@Component({
  selector: 'app-infected-patients',
  templateUrl: './infected-patients.page.html',
  styleUrls: ['./infected-patients.page.scss'],
})
export class InfectedPatientsPage implements OnInit {

  isLoading = false;
  patientData = [];

  constructor(
    public loadingController: LoadingController
  ) { }

  ngOnInit() {
    this.presentLoading();
    $.get('https://api.covid19india.org/raw_data.json', (data: any, _status: any) => {
      this.dismissLoading();
      this.setResourceData(data);
    });
  }

  async presentLoading() {
    this.isLoading = true;
    return await this.loadingController.create({
      message: 'Fetching Data...',
      mode: 'ios'
    }).then(a => {
      a.present().then(() => {
        if (!this.isLoading) {
          a.dismiss();
        }
      });
    });
  }

  async dismissLoading() {
    this.isLoading = false;
    return await this.loadingController.dismiss();
  }

  setResourceData(data) {
    this.patientData = data;
  }

}
