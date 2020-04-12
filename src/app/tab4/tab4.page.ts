import { Component } from '@angular/core';
import { NavController, AlertController, ActionSheetController } from '@ionic/angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss'],
})
export class Tab4Page {
  constructor(
    private navController: NavController,
    public alertController: AlertController,
    public actionSheetController: ActionSheetController,
    public browser: InAppBrowser
  ) { }

  loadPage(page) {
    this.navController.navigateForward(page);
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      buttons: [{
        text: 'Feature Request',
        icon: 'add-circle-outline',
        handler: () => {
          this.featureRequest();
        }
      }, {
        text: 'Bug Report',
        icon: 'bug-outline',
        handler: () => {
          this.bugReport();
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel'
      }]
    });
    await actionSheet.present();
  }

  // tslint:disable: max-line-length
  featureRequest() {
    const URL = this.browser.create('https://github.com/TheOrangeCoffeeProject/CoVide/issues/new?assignees=&labels=&template=feature_request.md&title=');
    URL.show();
  }

  bugReport() {
    const URL = this.browser.create('https://github.com/TheOrangeCoffeeProject/CoVide/issues/new?assignees=&labels=&template=bug_report.md&title=');
    URL.show();
  }

  async presentAlert(header, message) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK']
    });

    await alert.present();
  }

  // tslint:disable: max-line-length
  shareApp() {
    let Navigator: any;

    Navigator = window.navigator;

    if (Navigator && Navigator.share) {
      Navigator.share({
        title: 'COVIDE | COVID-19 Status Tracker & Help',
        text: 'Download COVIDE App for your phone now and track live status of COVID-19. Plus also get useful tips, patient data, travel information, and services available in your city.',
        url: 'https://luciferreeves.github.io/CoVide'
      }).then(() => {
        this.presentAlert('Thanks for Sharing!', `Thank you for sharing this app. You just made this world a better place. You're a hero!`);
      })
        .catch(err => {
          this.presentAlert('Oops!', `We know you didn't wanted this but the share sheet was closed before you could even share the app. Please try again!`);
        });
    } else {
      this.presentAlert('Error!', `Whoa, this is embarassing! Either your device doesn't support sharing or we just made a boo-boo. If you think this is a mistake, report it to us and we will look into it!`);
    }
  }
}
