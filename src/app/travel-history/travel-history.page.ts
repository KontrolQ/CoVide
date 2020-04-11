import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import * as $ from 'jquery';

@Component({
  selector: 'app-travel-history',
  templateUrl: './travel-history.page.html',
  styleUrls: ['./travel-history.page.scss'],
})
export class TravelHistoryPage implements OnInit {
  isLoading = false;
  travelData = [];
  length = 0;

  constructor(public loadingController: LoadingController) { }

  ngOnInit() {
    this.presentLoading();
    // tslint:disable-next-line: variable-name
    $.get('https://api.covid19india.org/travel_history.json', (data: any, _status: any) => {
        this.setTravelData(data);
      }
    );
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

  setTravelData(data) {
    this.travelData = data.travel_history;
    this.dismissLoading();
    this.showTravelhistory(20);
  }

  showTravelhistory(numberOfItem) {
    for (let i = 0; i < numberOfItem; i++) {
      const originalLength = this.length;
      $('#travel_history').append(`<ion-item>
          <ion-label slot="end" style="max-width:20%">
            <h2>${this.travelData[i + originalLength].pid}</h2>
          </ion-label>
          <ion-label>
          <h2>
            <ion-icon name="location-outline"></ion-icon> ${
                  this.travelData[i + originalLength].address
                  }
          </h2>
          <p>Time Start: ${this.travelData[i + originalLength].timefrom}</p>
          <p>Time End: ${this.travelData[i + originalLength].timeto}</p>
          </ion-label>
        </ion-item>`);
      this.length++;
    }
  }

  loadData(event) {
    setTimeout(() => {
      event.target.complete();
      this.showTravelhistory(20);
      if (this.length === this.travelData.length || this.length > this.travelData.length) {
        event.target.disabled = true;
      }
    }, 500);
  }
}
