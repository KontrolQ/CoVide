import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { NavController, AlertController } from '@ionic/angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit {

  major = 0;
  minor = 1;
  patch = 0;

  constructor(
    private navController: NavController,
    private alertController: AlertController,
    private browser: InAppBrowser
  ) { }

  ngOnInit() {
    this.checkUpdate();
    this.loadData();
  }

  async updateApp() {
    const alert = await this.alertController.create({
      header: 'App Update Available!',
      message: 'We will take you to our website. Download the app and install it manually.!',
      buttons: [
        {
          text: 'Later',
          role: 'cancel',
          cssClass: 'secondary'
        }, {
          text: 'Okay',
          handler: () => {
            this.getUpdate();
          }
        }
      ]
    });

    await alert.present();
  }

  getUpdate() {
    window.open('https://theorangecoffeeproject.github.io/CoVide/', '_system');
  }

  checkUpdate() {
    $.get('https://raw.githubusercontent.com/TheOrangeCoffeeProject/CoVide/master/updateData.json', (data) => {
      const updateData = JSON.parse(data);
      if (updateData.major !== this.major || updateData.minor !== this.minor || updateData.patch !== this.patch) {
        this.updateApp();
      }
    });
  }

  refreshContent(event) {
    this.loadData();
    setTimeout(() => {
      event.target.complete();
    }, 2000);
  }
  loadPage(page) {
    // console.log(page);
    this.navController.navigateForward(page);
  }
  loadData() {
    let disabled = false;
    $.get('https://api.covid19india.org/data.json', (data, status) => {
      $('#total_affected').text(data.statewise[0].confirmed);
      $('#active_data').text(data.statewise[0].active);
      $('#recovered_data').text(data.statewise[0].recovered);
      $('#deceased_data').text(data.statewise[0].deaths);
      $('#daily_affected').text(data.statewise[0].deltaconfirmed);
      $('#daily_recovered').text(data.statewise[0].deltarecovered);
      $('#daily_death').text(data.statewise[0].deltadeaths);
      $('#daily_active').text(
        // tslint:disable: radix
        parseInt(data.statewise[0].deltaconfirmed) -
        (parseInt(data.statewise[0].deltarecovered) +
          parseInt(data.statewise[0].deltadeaths))
      );
      $('#last_update').text(data.statewise[0].lastupdatedtime);
      disabled = false;
    });
  }
}
