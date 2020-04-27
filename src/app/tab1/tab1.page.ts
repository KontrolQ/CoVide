import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import {
  NavController,
  AlertController,
  ModalController,
} from '@ionic/angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import * as Chart from 'chart.js';
import { NotificationsModalPage } from '../notifications-modal/notifications-modal.page';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  major = 0;
  minor = 3;
  patch = 0;
  updates = [];
  showNotification = false;
  recentData = [];
  constructor(
    private navController: NavController,
    private alertController: AlertController,
    private browser: InAppBrowser,
    private modalController: ModalController
  ) {}

  ngOnInit() {
    this.getRecentData();
    this.checkUpdate();
    this.loadData();
  }

  async presentNotificationModal() {
    const modal = await this.modalController.create({
      component: NotificationsModalPage,
    });
    return await modal.present();
  }

  getRecentData() {
    $.get('https://api.covid19india.org/data.json', (data) => {
      this.setRecentData(data);
    });
  }

  setRecentData(data) {
    for (const item of data.cases_time_series) {
      const chartData = {
        totalconfirmed: item.totalconfirmed,
        date: item.date,
      };
      this.recentData.push(chartData);
    }
    this.showRecentData();
  }

  showRecentData() {
    const datasetData = [];
    const labelsData = [];
    for (let i = this.recentData.length - 10; i < this.recentData.length; i++) {
      // tslint:disable-next-line: radix
      datasetData.push(parseInt(this.recentData[i].totalconfirmed));
    }
    for (let i = this.recentData.length - 10; i < this.recentData.length; i++) {
      labelsData.push(this.recentData[i].date);
    }
    const canvas = document.getElementById('history_data') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');
    const gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, 'rgba(58,72,237,0.3)');
    gradient.addColorStop(1, 'rgba(255,255,255,1)');
    const myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labelsData,
        datasets: [
          {
            label: 'Total Reported Cases',
            data: datasetData,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(131, 255, 64, 0.2)',
              'rgba(64, 223, 255, 0.2)',
              'rgba(255, 64, 195, 0.2)',
              'rgba(179, 71, 21, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
              'rgba(131, 255, 64, 1)',
              'rgba(64, 223, 255, 1)',
              'rgba(255, 64, 195, 1)',
              'rgba(179, 71, 21, 1)',
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        legend: {
          display: false,
        },
        maintainAspectRatio: false,
        scales: {
          animation: {
            duration: 2000,
            easing: 'easeOutQuart',
          },
          xAxes: [
            {
              gridLines: {
                display: false,
              },
              ticks: {
                display: false,
              },
            },
          ],
          yAxes: [
            {
              gridLines: {
                display: false,
              },
              ticks: {
                display: false,
              },
            },
          ],
        },
      },
    });
  }

  async updateApp() {
    const alert = await this.alertController.create({
      header: 'App Update Available!',
      message:
        'We will take you to our website. Download the app and install it manually.!',
      buttons: [
        {
          text: 'Later',
          role: 'cancel',
          cssClass: 'secondary',
        },
        {
          text: 'Okay',
          handler: () => {
            this.getUpdate();
          },
        },
      ],
    });

    await alert.present();
  }
  closeNotification() {
    this.showNotification = false;
  }
  loadNotification() {
    if (this.showNotification === true) {
      this.showNotification = false;
    }
    this.showNotification = true;
    $.get('https://api.covid19india.org/updatelog/log.json', (data) => {
      this.updates = data;
    });
    console.log('hi');
  }
  getUpdate() {
    window.open('https://theorangecoffeeproject.github.io/CoVide/', '_system');
  }

  checkUpdate() {
    $.get(
      'https://raw.githubusercontent.com/TheOrangeCoffeeProject/CoVide/master/updateData.json',
      (data) => {
        const updateData = JSON.parse(data);
        if (
          updateData.major !== this.major ||
          updateData.minor !== this.minor ||
          updateData.patch !== this.patch
        ) {
          this.updateApp();
        }
      }
    );
  }

  refreshContent(event) {
    this.getRecentData();
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
