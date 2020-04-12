import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Router, NavigationEnd, Event } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit, OnDestroy, AfterViewInit {

  backButtonSubscription;
  subscription: any;

  constructor(private platform: Platform, private router: Router) {
    this.subscription = this.router.events.subscribe((event: Event)  => {
      if (event instanceof NavigationEnd ) {
        if ((event.url).includes('home')) {
          this.exitOnBackButtonPress();
        } else {
          this.backButtonSubscription.unsubscribe();
        }
      }
    });
  }

  ngOnInit() {
    // console.log(this.router.url);
  }
  // tslint:disable: no-string-literal

  ngAfterViewInit() {
  }

  exitOnBackButtonPress() {
    this.backButtonSubscription = this.platform.backButton.subscribe(() => {
      navigator['app'].exitApp();
    });
  }

  ngOnDestroy() {
    this.backButtonSubscription.unsubscribe();
  }

}
