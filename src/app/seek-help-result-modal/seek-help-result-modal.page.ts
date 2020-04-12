import { Component, OnInit, Input } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-seek-help-result-modal',
  templateUrl: './seek-help-result-modal.page.html',
  styleUrls: ['./seek-help-result-modal.page.scss'],
})
export class SeekHelpResultModalPage implements OnInit {

  @Input() resultData: any;
  data: any;

  constructor(public modalController: ModalController, public navParams: NavParams) {
    this.data = this.navParams.get('resultData');
  }

  ngOnInit() {
  }

  dismissModal() {
    this.modalController.dismiss({
      dismissed: true
    });
  }

}
