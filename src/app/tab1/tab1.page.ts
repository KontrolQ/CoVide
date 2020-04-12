import { Component, OnInit } from "@angular/core";
import * as $ from "jquery";
import { NavController } from "@ionic/angular";
@Component({
  selector: "app-tab1",
  templateUrl: "tab1.page.html",
  styleUrls: ["tab1.page.scss"],
})
export class Tab1Page implements OnInit {
  constructor(private navController: NavController) {}

  ngOnInit() {
    this.loadData();
  }

  refreshContent(event) {
    this.loadData();
    setTimeout(() => {
      event.target.complete();
    }, 2000);
  }
  loadPage(page) {
    console.log(page);
    this.navController.navigateForward(page);
  }
  loadData() {
    let disabled = false;
    $.get("https://api.covid19india.org/data.json", (data, status) => {
      $("#total_affected").text(data.statewise[0].confirmed);
      $("#active_data").text(data.statewise[0].active);
      $("#recovered_data").text(data.statewise[0].recovered);
      $("#deceased_data").text(data.statewise[0].deaths);
      $("#daily_affected").text(data.statewise[0].deltaconfirmed);
      $("#daily_recovered").text(data.statewise[0].deltarecovered);
      $("#daily_death").text(data.statewise[0].deltadeaths);
      $("#daily_active").text(
        // tslint:disable: radix
        parseInt(data.statewise[0].deltaconfirmed) -
          (parseInt(data.statewise[0].deltarecovered) +
            parseInt(data.statewise[0].deltadeaths))
      );
      $("#last_update").text(data.statewise[0].lastupdatedtime);
      disabled = false;
    });
  }
}
