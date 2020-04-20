import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { SeekHelpResultModalPage } from './seek-help-result-modal/seek-help-result-modal.page';
import { SeekHelpResultModalPageModule } from './seek-help-result-modal/seek-help-result-modal.module';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { EulaModalPage } from './eula-modal/eula-modal.page';
import { EulaModalPageModule } from './eula-modal/eula-modal.module';
import { NotificationsModalPage } from './notifications-modal/notifications-modal.page';
import { NotificationsModalPageModule } from './notifications-modal/notifications-modal.module';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [SeekHelpResultModalPage, EulaModalPage, NotificationsModalPage],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    SeekHelpResultModalPageModule,
    EulaModalPageModule,
    NotificationsModalPageModule],
  providers: [
    StatusBar,
    SplashScreen,
    NativeStorage,
    ScreenOrientation,
    InAppBrowser,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
