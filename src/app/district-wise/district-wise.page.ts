import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import * as $ from "jquery";
import { LoadingController, AlertController } from "@ionic/angular";
@Component({
  selector: "app-district-wise",
  templateUrl: "./district-wise.page.html",
  styleUrls: ["./district-wise.page.scss"],
})
export class DistrictWisePage implements OnInit {
  state = "";
  districts = [];
  isLoading = false;

  constructor(
    public loadingController: LoadingController,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.state = params.state;
    });
    this.presentLoading();
    this.getDataDistrict();
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
  getDataDistrict() {
    $("#state").text(this.state);
    $.get(
      "https://api.covid19india.org/state_district_wise.json",
      (data, status) => {
        this.dismissLoading();
        this.setDistrictData(data);
      }
    );
  }
  async dismissLoading() {
    this.isLoading = false;
    return await this.loadingController.dismiss();
  }
  setDistrictData(data) {
    this.districts = data[this.state];

    this.updateUI();
  }
  updateUI() {
    $("#district-row").append(`
    <ion-row style='background-color: grey; color: white;'>
    <ion-col style='margin-top:4px;margin-left: 10px;'>District</ion-col>
    <ion-col style='margin-top:4px;' >Case</ion-col>
    </ion-row>`);
    const list = Object.entries(this.districts["districtData"]).map((ele) => ({
      district: ele[0],
      data: ele[1],
    }));
    list.forEach((element) => {
      $("#district-row").append(`
      <ion-row style='height:40px;border: 1px solid grey;'>
      <ion-col style='margin-top:4px;margin-left: 10px; white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;'>${element.district}</ion-col>
      <ion-col style='margin-top:4px;' >${element.data["confirmed"]}</ion-col>
      </ion-row>
      `);
    });
  }
}
