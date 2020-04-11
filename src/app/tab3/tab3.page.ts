import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  allResources = [];
  states = [];
  selectedState = '';

  constructor() { }

  ngOnInit() {

    // tslint:disable: variable-name
    $.get('https://api.covid19india.org/resources/resources.json', (data: any, _status: any) => {
      this.setResourceData(data);
    });

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
  }

  stateSelected() {
    console.log(this.selectedState);
  }

}
