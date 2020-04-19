import { Component, OnInit } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { NavController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { EulaModalPage } from '../eula-modal/eula-modal.page';

@Component({
  selector: 'app-eula',
  templateUrl: './eula.page.html',
  styleUrls: ['./eula.page.scss'],
})
export class EulaPage implements OnInit {

  constructor(
    private nativeStorage: NativeStorage,
    private navController: NavController,
    public modalController: ModalController
  ) { }

  ngOnInit() {
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: EulaModalPage
    });
    return await modal.present();
  }

  acceptEULA() {
    this.nativeStorage.setItem('eluaAccepted', { property: 'true'})
      .then(
        () => this.navController.navigateRoot(''),
        error => console.error('Error storing item', error)
      );
  }

  play_sound() {
    const audio = new Audio('../../assets/audio/CoVide.mp3');
    audio.play();
  }

}
