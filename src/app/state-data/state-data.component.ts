import { Component, OnInit } from "@angular/core";
import * as $ from "jquery";

@Component({
  selector: "app-state-data",
  templateUrl: "./state-data.component.html",
  styleUrls: ["./state-data.component.scss"],
})
export class StateDataComponent implements OnInit {
  stateData = [];
  colors = [
    { id: 1, color: "#085582" },
    { id: 2, color: "#1c3b4d" },
    { id: 3, color: "#2b2727" },
    { id: 4, color: "#2b0406" },
    { id: 5, color: "#e4ebc7" },
    { id: 6, color: "#d1ce08" },
    { id: 7, color: "#d18b08" },
    { id: 8, color: "#d16d08" },
    { id: 9, color: "#08c7d1" },
    { id: 10, color: "#0881d1" },
    { id: 11, color: "#7308d1" },
    { id: 12, color: "#d108c4" },
    { id: 13, color: "#e4ebc7" },
    { id: 14, color: "#d1080b" },
    { id: 15, color: "#121010" },
    { id: 16, color: "#332020" },
    { id: 17, color: "#333120" },
    { id: 18, color: "#203333" },
    { id: 19, color: "#202833" },
    { id: 20, color: "#202890" },
    { id: 21, color: "#538a5f" },
    { id: 22, color: "#4c59ad" },
    { id: 23, color: "#e3849d" },
    { id: 24, color: "#b784e3" },
    { id: 25, color: "#9ce384" },
    { id: 26, color: "#e3ca84" },
    { id: 27, color: "#f55f02" },
    { id: 28, color: "#f5ed02" },
    { id: 29, color: "#c0f502" },
    { id: 30, color: "#02edf5" },
    { id: 31, color: "#0212f5" },
    { id: 32, color: "#9002f5" },
    { id: 33, color: "#f502d1" },
    { id: 34, color: "#f5026f" },
    { id: 35, color: "#02a8f5" },
    { id: 36, color: "#61604e" },
    { id: 37, color: "#514e61" },
  ];
  constructor() {}

  ngOnInit() {
    this.getStateData();
  }

  getStateData() {
    $.get("https://api.covid19india.org/data.json", (data, status) => {
      this.setStateData(data.statewise);
    });
  }
  setStateData(data) {
    this.stateData = data;
    this.updataUI();
  }
  updataUI() {
    // $("#state_data_card").empty();
    for (let i = 1; i < this.stateData.length; i++) {
      console.log(this.stateData[i]);
      $("#state_data_card").append(`<ion-slide>
      <div class="slide">
        <ion-card style='background-color: ${this.colors[i - 1].color};'>
          
          <ion-card-header>
            <ion-card-subtitle>+${
              this.stateData[i].deltaconfirmed
            } Today</ion-card-subtitle>
            <ion-card-title>${this.stateData[i].state}</ion-card-title>
          </ion-card-header>
          <ion-card-content>
          
          </ion-card-content>
        </ion-card>
      </div>
    </ion-slide>`);
    }
  }
}
