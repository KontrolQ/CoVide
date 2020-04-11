import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-helpline-numbers',
  templateUrl: './helpline-numbers.page.html',
  styleUrls: ['./helpline-numbers.page.scss'],
})
export class HelplineNumbersPage implements OnInit {

  constructor() {}

  ngOnInit() {
  }

  segmentChanged(ev: any) {
    $('#states').toggle();
    $('#uts').toggle();
    // console.log('Segment changed', ev);
  }

}
