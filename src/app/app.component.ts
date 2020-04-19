import { Component, OnInit } from '@angular/core';

import { Platform, NavController, ToastController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { AlertController } from '@ionic/angular';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { Router, Event } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {

  currentUrl: string;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private nativeStorage: NativeStorage,
    public alertController: AlertController,
    private screenOrientation: ScreenOrientation,
    private navController: NavController,
    private router: Router,
    private toastCtrl: ToastController
  ) {
    router.events.subscribe((event: Event) => {
      this.currentUrl = this.router.url;
    });
    this.initializeApp();
    this.lockScreenOrientation();
  }

  // tslint:disable: no-string-literal

  ngOnInit() {
    let lastTimeBackPress = 0;
    const timePeriodToExit = 2000;
    this.platform.backButton.subscribeWithPriority(0, async () => {
      if (this.currentUrl.includes('home')) {
        if (new Date().getTime() - lastTimeBackPress < timePeriodToExit) {
          navigator['app'].exitApp();
        } else {
          const toast = await this.toastCtrl.create({
            message: 'Press back again to exit App',
            duration: 3000,
            position: 'bottom'
          });
          toast.present();
          lastTimeBackPress = new Date().getTime();
        }
      } else {
        this.navController.pop();
      }
    });
  }


  lockScreenOrientation() {
    if (this.platform.is('cordova')) {
      this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
    }
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
          this.navController.navigateRoot('');
        },
        error => {
          // this.navController.navigateRoot('eula');
        }
      );
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
