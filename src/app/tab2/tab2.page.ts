import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import * as Chart from 'chart.js';
import { LoadingController, AlertController } from '@ionic/angular';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page implements OnInit {
  countryData = [];
  isLoading = false;

  constructor(
    public loadingController: LoadingController,
    public alertController: AlertController
  ) { }

  ngOnInit() {
    this.presentLoading();
    this.loadCountryData();
  }
  async presentLoading() {
    this.isLoading = true;
    return await this.loadingController
      .create({
        message: 'Fetching Data...',
        mode: 'ios',
      })
      .then((a) => {
        a.present().then(() => {
          if (!this.isLoading) {
            a.dismiss();
          }
        });
      });
  }

  loadCountryData() {
    $.get('https://api.covid19api.com/summary', (data, status) => {
      // console.log(data.Countries);
      this.dismissLoading();
      this.setCountryData(data.Countries);
    });
  }
  async dismissLoading() {
    this.isLoading = false;
    return await this.loadingController.dismiss();
  }
  setCountryData(data) {
    const sortBy = (field, reverse, primer) => {

      const key = primer ?
        // tslint:disable: only-arrow-functions
        function(x) { return primer(x[field]); } :
        function(x) { return x[field]; };

      reverse = !reverse ? 1 : -1;

      return function(a, b) {
        return a = key(a), b = key(b), reverse * (+(a > b) - +(b > a));
      };
    };
    this.countryData = data;
    this.countryData = this.countryData.sort(sortBy('TotalConfirmed', true, parseInt));
    this.updateUI();
  }
  updateUI() {
    // tslint:disable: max-line-length
    this.loadPieChart(this.countryData[0]);
    $('#World_card').empty();
    for (let i = 0; i < this.countryData.length - 1; i++) {
      $('#World_card').append(`
      <div id="${i}" class="loadingPieChatData" style="background-color: #f2f2f2;display: inline-block; padding: 15px; border-radius: 12px; width: 85%; height: 115px; margin: 0px 10px 0px 0px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      box-shadow: 1px 5px 20px 2px rgba(0, 0, 0, 0.06);">
       <div style="  display: grid; grid-template-columns: auto; grid-gap: 10px;">
        <div id="${i}" style="text-align: center;  white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;">
        <br>
            <div style='color: red; font-size: 15px;'>+${this.countryData[i].NewConfirmed} Today</div>
            <div>
            <ion-row style=" white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;">
            <ion-col style="font-size: 20px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${this.countryData[i].Country}</ion-col>
            </ion-row>
            </div>
        </div>
        </div>
      </div>`);
      //     $('#World_card').append(`
      //      <ion-card>
      //      <ion-card-header>
      //      <ion-card-subtitle style="color: red;">+${
      //       this.countryData[i].NewConfirmed
      //       } Today</ion-card-subtitle>
      //      <ion-card-title style='font-weight: bold;'>${
      //       this.countryData[i].Country
      //       }</ion-card-title>
      //    </ion-card-header>
      //    <ion-card-content>
      //      <ion-row>
      //      <ion-col style='color: #501717; text-align:center;'>
      //       <div>Affected</div>
      //       <div >${this.countryData[i].TotalConfirmed}</div>
      //       <div style='font-size: 11px;'>+ [${
      //       this.countryData[i].NewConfirmed
      //       }]</div>
      //      </ion-col>
      //      <ion-col style='text-align: center; color: #23308e;'>
      //      <div >Active</div>
      //      <div >${
      //       // tslint:disable: radix
      //       parseInt(this.countryData[i].TotalConfirmed) -
      //       (parseInt(this.countryData[i].TotalRecovered) +
      //         parseInt(this.countryData[i].TotalDeaths))
      //       }</div>
      //      </ion-col>
      //      <ion-col style='text-align: center; color: #238e43;'>
      //      <div >Recovered</div>

      //      <div >${this.countryData[i].TotalRecovered}</div>
      // <div style='font-size: 11px;'>+ [${this.countryData[i].NewRecovered}]</div>
      //      </ion-col>
      //      <ion-col style="text-align: center; color: #2f2f2f;"
      //      >
      //      <div>Deceased</div>
      //       <div >${this.countryData[i].TotalDeaths}</div>
      //       <div style='font-size: 11px;'>+ [${this.countryData[i].NewDeaths}]</div>
      //      </ion-col>
      //      </ion-row>
      //    </ion-card-content>
      //  </ion-card>
      //      </ion-card>
      //   `);
      $('.loadingPieChatData').click((event) => {
        const id = event.currentTarget.id;
        this.loadPieChart(this.countryData[id]);
      });
    }
  }
  loadPieChart(countryObject) {
    const canvas = document.getElementById('world_data') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');
    const gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, 'rgba(58,72,237,0.3)');
    gradient.addColorStop(1, 'rgba(255,255,255,1)');
    const labelsData = ['Confirmed', 'Recovered', 'Deceased'];
    const datasetData = [countryObject.TotalConfirmed, countryObject.TotalRecovered, countryObject.TotalDeaths];
    const myChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: labelsData,
        datasets: [
          {
            label: 'Total Reported Cases',
            data: datasetData,
            backgroundColor: [
              '#ff5959',
              '#59ffa6',
              '#e3e3e3'
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        legend: {
          display: false,
        },
        maintainAspectRatio: false,
        scales: {
          animation: {
            duration: 2000,
            easing: 'easeOutQuart',
          },
          xAxes: [
            {
              gridLines: {
                display: false,
              },
              ticks: {
                display: false,
              },
            },
          ],
          yAxes: [
            {
              gridLines: {
                display: false,
              },
              ticks: {
                display: false,
              },
            },
          ],
        },
      },
    });
    $('#blueback').text(countryObject.Country);
  }
}
