import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  selectedLanguage: string;
  agreed = false;

  constructor() { }

  playSound() {
    const audio = new Audio('../../assets/audio/CoVide.mp3');
    audio.play();
  }

}
