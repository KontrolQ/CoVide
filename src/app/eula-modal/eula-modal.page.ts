import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-eula-modal',
  templateUrl: './eula-modal.page.html',
  styleUrls: ['./eula-modal.page.scss'],
})
export class EulaModalPage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  dismissModal() {
    this.modalController.dismiss();
  }

}
