import { Component } from '@angular/core';

import { NavController, Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

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
    private navCtrl: NavController,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      if (this.platform.is('cordova')) {
        this.nativeStorage.getItem('eulaAccepted')
          .then(
            data => console.log(data),
            error => console.error(error)
          );
      } else {
        const accepted: boolean | string = localStorage.getItem('eulaAccepted');
        if (accepted) {
          this.navCtrl.navigateRoot('dashboard');
        } else {
          console.log(accepted);
        }
      }
    });
  }
}
