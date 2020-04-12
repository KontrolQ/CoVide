import { Component, OnInit } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-eula',
  templateUrl: './eula.page.html',
  styleUrls: ['./eula.page.scss'],
})
export class EulaPage implements OnInit {

  constructor(
    private nativeStorage: NativeStorage,
    private navController: NavController
  ) { }

  ngOnInit() {
  }

  acceptEULA() {
    this.nativeStorage.setItem('eluaAccepted', { property: 'true'})
      .then(
        () => this.navController.navigateRoot(''),
        error => console.error('Error storing item', error)
      );
  }

}
