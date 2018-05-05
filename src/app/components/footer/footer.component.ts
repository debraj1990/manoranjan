import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  amitkumarPng: string;
  connectedWorldHackathon: string;
  linkedinPng: string;
  debrajrayPng: string;

  constructor() { }

  ngOnInit() {
    this.amitkumarPng = './assets/amitkumar.png';
    this.linkedinPng = './assets/linkedin.png';
    this.debrajrayPng = './assets/debrajray.png';
    this.connectedWorldHackathon = 'Manoranjan - The voice for Entertainment!!';
  }

}
