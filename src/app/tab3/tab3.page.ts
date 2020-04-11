import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { LoadingController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  allResources = [];
  states = [];
  cities = [];
  isLoading = false;
  selectedState = null;
  selectedCity = null;

  constructor(
    public loadingController: LoadingController,
    public alertController: AlertController
  ) { }

  ngOnInit() {

    this.presentLoading();
    // tslint:disable: variable-name
    $.get('https://api.covid19india.org/resources/resources.json', (data: any, _status: any) => {
      this.dismissLoading();
      this.setResourceData(data);
    });

  }

  async presentLoading() {
    this.isLoading = true;
    return await this.loadingController.create({
      message: 'Fetching Data...',
      mode: 'ios'
    }).then(a => {
      a.present().then(() => {
        if (!this.isLoading) {
          a.dismiss();
        }
      });
    });
  }

  async presentInvalidDataAlert() {
    const alert = await this.alertController.create({
      header: 'Error!',
      // subHeader: 'Empty Selections!',
      message: 'Empty Selections! Please select all values to get the desired help.',
      buttons: ['OK']
    });

    await alert.present();
  }

  async dismissLoading() {
    this.isLoading = false;
    return await this.loadingController.dismiss();
  }

  setResourceData(data) {
    this.allResources = data.resources;
    this.setStates();
  }

  setStates() {
    for (const resource of this.allResources) {
      const currentState = resource.state;
      if (!(this.states.includes(currentState))) {
        this.states.push(currentState);
      }
    }
    this.updateStatesUI();
  }

  updateStatesUI() {
    $('#stateSelectSheet').empty();
    for (const state of this.states) {
      $('#stateSelectSheet').append(`<ion-select-option value="${state}">${state}</ion-select-option>`);
    }
    this.setCities();
  }

  setCities() {
    for (const resource of this.allResources) {
      const currentCity = resource.city;
      const currentState = resource.state;
      const data = {
        city: currentCity,
        state: currentState
      };
      const ifCityPresent = this.searchCity(currentCity, this.cities);
      if (ifCityPresent === undefined) {
        this.cities.push(data);
      }
    }
  }

  searchCity(nameKey, myArray) {
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < myArray.length; i++) {
      if (myArray[i].city === nameKey) {
        return myArray[i];
      }
    }
  }

  stateSelected() {
    const selectedState = this.selectedState;
    this.selectedCity = null;
    this.updateCitiesUI(selectedState);
  }

  updateCitiesUI(state) {
    const citiesForCurrentState = [];
    this.cities.forEach(city => {
      if (city.state === state) {
        citiesForCurrentState.push(city.city);
      }
    });
    $('#citySelectSheet').empty();
    for (const city of citiesForCurrentState) {
      $('#citySelectSheet').append(`<ion-select-option value="${city}">${city}</ion-select-option>`);
    }
  }

  citySelected() {
    const selectedCity = this.selectedCity;
    console.log(selectedCity);
  }

  showHelp() {
    if (this.selectedCity === null || this.selectedState === null) {
      this.presentInvalidDataAlert();
    }
  }

}
