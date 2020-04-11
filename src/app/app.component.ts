import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { AlertController } from '@ionic/angular';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private nativeStorage: NativeStorage,
    public alertController: AlertController,
    private screenOrientation: ScreenOrientation
  ) {
    this.initializeApp();
    this.lockScreenOrientation();
  }

  lockScreenOrientation() {
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
  }

  async noInternetAlert() {
    const alert = await this.alertController.create({
      header: 'No Internet Connection',
      // tslint:disable-next-line: max-line-length
      message: 'The app needs to be consistently connected to the internet to fetch live status. Please check your internet connection and try again.',
      buttons: ['OK']
    });

    await alert.present();
  }

  initializeApp() {
    this.nativeStorage.getItem('eluaAccepted')
      .then(
        data => {
          if (data === 'true') {

          }
        },
        error => {
          console.log('Hello');
        }
      );
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
