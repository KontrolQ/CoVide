import { Component, OnInit } from "@angular/core";
import * as $ from "jquery";
import { NavController } from "@ionic/angular";

@Component({
  selector: "app-state-data",
  templateUrl: "./state-data.component.html",
  styleUrls: ["./state-data.component.scss"],
})
export class StateDataComponent implements OnInit {
  stateData = [];
  // tslint:disable: max-line-length

  constructor(private navController: NavController) {}

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
  generate() {
    var hexValues = [
      "278525",
      "f59d05",
      "660000",
      "331900",
      "f5050d",
      "001933",
      "330066",
      "e65085",
      "4c0cfa",
      "0541f5",
      "f26500",
      "006666",
      "6666FF",
    ];
    var newColor = "#";
    var x = Math.round(Math.random() * 12);
    var y = hexValues[x];
    newColor += y;
    console.log(newColor);
    return newColor;
  }
  updataUI() {
    /*
    <div style='color: red;'>[${
               this.stateData[i].deltaconfirmed
             }]</div>

             <div style='color: blue;'>[${
               // tslint:disable: radix
               parseInt(this.stateData[i].deltaconfirmed) -
               (parseInt(this.stateData[i].deltarecovered) +
                 parseInt(this.stateData[i].deltadeaths))
             }]</div>

             <div style='color: green;'>[${
               this.stateData[i].deltarecovered
             }]</div>

             <div style='color: black;'>[${this.stateData[i].deltadeaths}]</div>
    */
    // $("#state_data_card").empty();
    for (let i = 1; i < this.stateData.length; i++) {
      const state = this.stateData[i].state.replace(/\s/g, "").toLowerCase();
      $("#state_data_card").append(`
      <div id="${
        this.stateData[i].state
      }" class="cardToClickForStateData" style="background-color: ${this.generate()};display: inline-block; padding: 15px; border-radius: 12px; width: 85%; height: 250px; margin: 0px 10px 0px 0px;
       box-shadow: 0px 5px 20px 2px rgba(0, 0, 0, 0.06);">
       <div style='font-size: 15px; text-align: right; color: white;'>View districts >></div>
       <div style="  display: grid; grid-template-columns: auto; grid-gap: 10px;">
        <div id="${this.stateData[i].state}" style="text-align: center;">
            <div style='color: white; font-size: 15px;'>+${
              this.stateData[i].deltaconfirmed
            } Today</div>
            <div>
            <ion-row>
            <ion-col style="font-size: 20px; color: white;">${
              this.stateData[i].state
            }</ion-col>
            </ion-row>
            </div>
        </div>
           <div style="text-align: center;">
            <ion-row>
             <ion-col>
             <div style='color: #501717; font-size: 24px; font-weight: 700;'>${
               this.stateData[i].confirmed
             }</div>
             <div style='color: #501717;'>Affected</div>

             </ion-col>
             <ion-col>
             <div style='color: #23308e; font-size: 24px; font-weight: 700;'>${
               this.stateData[i].active
             }</div>
             <div style='color: #23308e;'>Active</div>
            </ion-row>
            <ion-row>
             </ion-col>
             <ion-col>
             <div style='color: #238e43; font-size: 24px; font-weight: 700;'>${
               this.stateData[i].recovered
             }</div>
             <div style='color: #238e43;'>Recovered</div>

             </ion-col>
             <ion-col>
             <div style='color: #2f2f2f; font-size: 24px; font-weight: 700;'>${
               this.stateData[i].deaths
             }</div>
             <div style='color: #2f2f2f;'>Deceased</div>

             </ion-col>
            </ion-row>
          </div>
        </div>
      </div>`);
    }
    $(".cardToClickForStateData").click((event) => {
      const name = event.currentTarget.id;
      this.navController.navigateForward(`district-wise?state=${name}`);
    });
  }
  loadPage(state) {
    this.navController.navigateForward(state);
  }
}
