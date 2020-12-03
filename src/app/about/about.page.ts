import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {
  contact={
    nom :'Yosser',
    prenom :'Aguir',
    email:'aguiryosr@gmail.com',
    age :'23 ans',
    profession :'software developer',
    photo :'/assets/image/cv.PNG'
  }
  constructor() { }

  ngOnInit() {
  }

}
