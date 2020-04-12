import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import * as $ from "jquery";
@Component({
  selector: "app-district-wise",
  templateUrl: "./district-wise.page.html",
  styleUrls: ["./district-wise.page.scss"],
})
export class DistrictWisePage implements OnInit {
  state = "";
  districts = [];
  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe((params) => {
      this.state = params.state;
      console.log(this.state);
    });
  }

  ngOnInit() {
    $("#state").text(this.state);
    $.get(
      "https://api.covid19india.org/state_district_wise.json",
      (data, status) => {
        this.setDistrictData(data);
      }
    );
  }
  setDistrictData(data) {
    this.districts = data[this.state].districtData;
    console.log(this.districts);
    this.updateUI();
  }
  updateUI() {
    for (let i = 0; i < this.districts.length - 1; i++) {
      $('#district-card').append(`
      `)
    }
  }
}
