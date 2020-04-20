import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-notifications-modal',
  templateUrl: './notifications-modal.page.html',
  styleUrls: ['./notifications-modal.page.scss'],
})
export class NotificationsModalPage implements OnInit {

  fetchedData = [];
  updates = [];

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
    this.loadNotification();
  }

  loadNotification() {
    $.get('https://api.covid19india.org/updatelog/log.json', (data) => {
      data.forEach(element => {
        const d = new Date((element.timestamp * 1000));
        const date = d.getDate() + '/' + (d.getMonth() + 1) + '/' + d.getFullYear();
        const dataToAppend = {
          update: element.update,
          date
        };
        this.fetchedData.push(dataToAppend);
      });
    });
    this.setData();
  }

  setData() {
    this.updates = this.fetchedData;
  }

  dismiss() {
    this.modalCtrl.dismiss();
  }

}
