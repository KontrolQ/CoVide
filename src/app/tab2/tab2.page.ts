import { Component, OnInit } from "@angular/core";
import * as $ from "jquery";
import { LoadingController, AlertController } from "@ionic/angular";
@Component({
  selector: "app-tab2",
  templateUrl: "tab2.page.html",
  styleUrls: ["tab2.page.scss"],
})
export class Tab2Page {
  countryData = [];
  isLoading = false;

  constructor(
    public loadingController: LoadingController,
    public alertController: AlertController
  ) {}

  ngOnInit() {
    this.presentLoading();
    this.loadCountryData();
  }
  async presentLoading() {
    this.isLoading = true;
    return await this.loadingController
      .create({
        message: "Fetching Data...",
        mode: "ios",
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
    $.get("https://api.covid19api.com/summary", (data, status) => {
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
    this.countryData = data;
    this.updateUI();
  }
  updateUI() {
    $("#World_card").empty();
    for (let i = 0; i < this.countryData.length - 1; i++) {
      $("#World_card").append(`
       <ion-card>
       <ion-card-header>
       <ion-card-subtitle style="color: red;">+${
         this.countryData[i].NewConfirmed
       } Today</ion-card-subtitle>
       <ion-card-title style='font-weight: bold;'>${
         this.countryData[i].Country
       }</ion-card-title>
     </ion-card-header>
     <ion-card-content>
       <ion-row>
       <ion-col style='color: #501717; text-align:center;'>
        <div>Affected</div>
        <div >${this.countryData[i].TotalConfirmed}</div>
        <div style='font-size: 11px;'>+ [${
          this.countryData[i].NewConfirmed
        }]</div>
       </ion-col>
       <ion-col style='text-align: center; color: #23308e;'>
       <div >Active</div>
       <div >${
         parseInt(this.countryData[i].TotalConfirmed) -
         (parseInt(this.countryData[i].TotalRecovered) +
           parseInt(this.countryData[i].TotalDeaths))
       }</div>
       </ion-col>
       <ion-col style='text-align: center; color: #238e43;'>
       <div >Recovered</div>

       <div >${this.countryData[i].TotalRecovered}</div>
  <div style='font-size: 11px;'>+ [${this.countryData[i].NewRecovered}]</div>
       </ion-col>
       <ion-col style="text-align: center; color: #2f2f2f;"
       >
       <div>Deceased</div>
        <div >${this.countryData[i].TotalDeaths}</div>
        <div style='font-size: 11px;'>+ [${this.countryData[i].NewDeaths}]</div>
       </ion-col>
       </ion-row>
     </ion-card-content>
   </ion-card>
       </ion-card>
    `);
    }
  }
}
