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
  length = 0;

  constructor(
    public loadingController: LoadingController
  ) { }

  ngOnInit() {
    this.presentLoading();
    // tslint:disable-next-line: variable-name
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
    this.patientData = data.raw_data;
    this.showList(20);
  }

  showList(numberOfItems) {
    for (let i = 0; i < numberOfItems; i++) {
      const originalLength = this.length;
      $('#infectedPatientList').append(`<ion-item>
        <ion-label>
          <h1>${this.patientData[i + originalLength].currentstatus}</h1>
          <p>${this.patientData[i + originalLength].backupnotes} - ${this.patientData[i + originalLength].notes}</p>
          <p>Age Bracket: ${this.patientData[i + originalLength].agebracket}</p>
        </ion-label>
        <ion-label slot="end">
          <h2>
            <ion-icon name="location-outline"></ion-icon> ${this.patientData[i + originalLength].detectedcity} -
             ${this.patientData[i + originalLength].detectedstate}
          </h2>
        </ion-label>
      </ion-item>`);
      this.length++;
    }
  }

  loadData(event) {
    setTimeout(() => {
      event.target.complete();
      this.showList(20);

      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      if (this.length === this.patientData.length || this.length > this.patientData.length) {
        event.target.disabled = true;
      }
    }, 500);
  }

}
