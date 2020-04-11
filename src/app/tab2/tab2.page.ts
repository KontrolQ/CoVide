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
  }
  // updateUI() {
  //   $("#table_data").empty();
  //   for (let i = 0; i < this.countryData.length - 1; i++) {
  //     $("#table_data").append(`
  //     <tr style='border: solid 1px #000;'>
  //        <td style='border: solid 1px #000;>CompanyC</td>
  //        <td style='border: solid 1px #000;>0</td>
  //        <td style='border: solid 1px #000;>7</td>
  //        <td style='border: solid 1px #000;>2</td>
  //        <td style='border: solid 1px #000;>0</td>
  //   </tr>
  //   `);
  //   }
  // }
}
// <ion-row>
//     <ion-col style="">
//     <img style="width: 50%;" src='${this.countryData[i].countryInfo.flag}'>
//     </img></ion-col>
//     <ion-col
//       style="color: black; font-size: 12px;"
//       >${this.countryData[i].country}</ion-col
//     >
//     <ion-col
//       style="background-color: #501717; color: white; border: 1px solid gray;"
//       >
//       <div>${this.countryData[i].cases}</div>
//      <div> +[${this.countryData[i].todayCases}]</div>
//      </ion-col
//     >
//     <ion-col
//       style="background-color: #23308e; color: white; border: 1px solid gray;"
//       >
//       <div>${this.countryData[i].active}</div>
//       </ion-col
//     >
//     <ion-col
//       style="background-color: #238e43; color: white; border: 1px solid gray;"
//       >
//       <div>${this.countryData[i].recovered}</div>
//       </ion-col
//     >
//     <ion-col
//       style="background-color: #2f2f2f; color: white; border: 1px solid gray;"
//       >
//       <div>${this.countryData[i].deaths}</div>
//       <div>+[${this.countryData[i].todayDeaths}]</div>
//       </ion-col
//     >

//     </ion-row>
