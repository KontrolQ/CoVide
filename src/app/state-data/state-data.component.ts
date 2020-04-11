import { Component, OnInit } from "@angular/core";
import * as $ from "jquery";

@Component({
  selector: "app-state-data",
  templateUrl: "./state-data.component.html",
  styleUrls: ["./state-data.component.scss"],
})
export class StateDataComponent implements OnInit {
  stateData = [];
  images = [];
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
      $("#state_data_card").append(`<ion-slide>
      <div class="slide">
        <ion-card >
          
          <ion-card-header>
            <ion-card-subtitle style='color: red;'>+${
              this.stateData[i].deltaconfirmed
            } Today</ion-card-subtitle>
            <ion-card-title>${this.stateData[i].state}</ion-card-title>
          </ion-card-header>
          <ion-card-content>
           <div style="width: 100%;">
            <ion-row>
             <ion-col>
             <div style='color: red;'>Affected</div>
             <div style='color: red;'>${this.stateData[i].confirmed}</div>
             <div style='color: red;'>[${
               this.stateData[i].deltaconfirmed
             }]</div>
             </ion-col>
             <ion-col>
             <div style='color: blue;'>Active</div>
             <div style='color: blue;'>${this.stateData[i].active}</div>
             <div style='color: blue;'>[${
               parseInt(this.stateData[i].deltaconfirmed) -
               (parseInt(this.stateData[i].deltarecovered) +
                 parseInt(this.stateData[i].deltadeaths))
             }]</div>
             </ion-col>
             <ion-col>
             <div style='color: green;'>Recovered</div>
             <div style='color: green;'>${this.stateData[i].recovered}</div>
             <div style='color: green;'>[${
               this.stateData[i].deltarecovered
             }]</div>
             </ion-col>
             <ion-col>
             <div style='color: black;'>Deceased</div>
             <div style='color: black;'>${this.stateData[i].deaths}</div>
             <div style='color: black;'>[${this.stateData[i].deltadeaths}]</div>
             </ion-col>
            </ion-row>
           </div>
          </ion-card-content>
        </ion-card>
      </div>
    </ion-slide>`);
    }
  }
}
