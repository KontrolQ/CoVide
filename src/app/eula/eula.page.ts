import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-eula',
  templateUrl: './eula.page.html',
  styleUrls: ['./eula.page.scss'],
})
export class EulaPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  acceptEULA() {
    this.router.navigate([''], {replaceUrl: true});
  }

}
