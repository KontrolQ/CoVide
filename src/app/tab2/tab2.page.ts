import { Component, OnInit } from "@angular/core";
import * as $ from "jquery";
@Component({
  selector: "app-tab2",
  templateUrl: "tab2.page.html",
  styleUrls: ["tab2.page.scss"],
})
export class Tab2Page {
  countryData = [];

  constructor() {}

  ngOnInit() {
    this.loadCountryData();
  }
  loadCountryData() {
    $.get(
      "https://corona.lmao.ninja/countries?sort=country",
      (data, status) => {
        this.setCountryData(data);
      }
    );
  }
  setCountryData(data) {
    this.countryData = data;
    console.log(this.countryData);
    this.updateUI();
  }
  updateUI() {
    $("#World_card").empty();
    for (let i = this.countryData.length - 1; i > -1; i--) {
      $("#World_card").append(`
       <ion-card>
       <ion-card-header>
       <ion-card-subtitle style="color: red;">+ ${this.countryData[i].todayCases} Today</ion-card-subtitle>
       <ion-card-title style='font-weight: bold;'>${this.countryData[i].country}</ion-card-title>
     </ion-card-header>
     <ion-card-content>
       <ion-row>
       <ion-col style='color: #501717; background: linear-gradient(
        90deg,
        rgba(255, 255, 255, 1) 0%,
        rgba(248, 235, 234, 1) 100%
      );'>
        <div style='font-size: 15px; padding-left: 10px'>Affected</div>
        <div style='font-size: 15px;padding-left: 10px'>${this.countryData[i].cases}</div>
        <div style='font-size: 11px; padding-left: 10px '>+ [${this.countryData[i].todayCases}]</div>
       </ion-col>
       <ion-col style=' color: #23308e;
       background: linear-gradient(
         90deg,
         rgba(255, 255, 255, 1) 0%,
         rgba(234, 243, 248, 1) 100%
       );'>
       <div style='font-size: 15px; padding-left: 10px'>Active</div>
       <div style='font-size: 15px;padding-left: 10px'>${this.countryData[i].active}</div>
       </ion-col>
       <ion-col style='color: #238e43;
       background: linear-gradient(
         90deg,
         rgba(255, 255, 255, 1) 0%,
         rgba(234, 248, 234, 1) 100%
       );'>
       <div style='font-size: 15px; padding-left: 10px'>Recovered</div>
       <div style='font-size: 15px;padding-left: 10px'>${this.countryData[i].recovered}</div>
       </ion-col>
       <ion-col style="  color: #2f2f2f;
       background: linear-gradient(
         90deg,
         rgba(255, 255, 255, 1) 0%,
         rgba(180, 180, 180, 1) 100%
       );"
       >
       <div style='font-size: 15px; padding-left: 10px'>Deceased</div>
        <div style='font-size: 15px;padding-left: 10px'>${this.countryData[i].deaths}</div>
        <div style='font-size: 11px; padding-left: 10px '>+ [${this.countryData[i].todayDeaths}]</div>
       </ion-col>
       </ion-row>
       <ion-row>
       <ion-col style="text-align: center;">
        <div>Critical</div>
        <div>${this.countryData[i].critical}</div>
        </ion-col>
       <ion-col style="text-align: center;">
       <div>Cases/1M</div>
        <div> ${this.countryData[i].casesPerOneMillion}</div>
       </ion-col>
       <ion-col style="text-align: center;">
       <div>Death/1M</div>
        <div>${this.countryData[i].deathsPerOneMillion}</div>
       </ion-col>
       <ion-col style="text-align: center;">
       <div>Tests</div>
        <div >${this.countryData[i].tests}</div>
       </ion-col>
       <ion-col style="text-align: center;">
       <div>Test/1M</div>
        <div>${this.countryData[i].testsPerOneMillion}</div>
       </ion-col>
       </ion-row>
     </ion-card-content>
   </ion-card>
       </ion-card>
    `);
    }
  }
}
