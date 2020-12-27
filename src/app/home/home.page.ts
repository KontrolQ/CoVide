import { Component } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { NavController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  selectedLanguage: string;
  agreed = false;

  constructor(
    private platform: Platform,
    private nativeStorage: NativeStorage,
    private navCtrl: NavController,
  ) { }

  playSound() {
    const audio = new Audio('../../assets/audio/CoVide.mp3');
    audio.play();
  }

  acceptAgreement() {
    if (this.platform.is('cordova')) {
      this.nativeStorage.setItem('eulaAccepted', 'true');
      this.navCtrl.navigateRoot('dashboard');
    } else {
      localStorage.setItem('eulaAccepted', 'true');
      this.navCtrl.navigateRoot('dashboard');
    }
  }

}
