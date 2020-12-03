import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  home={
   image:'/assets/image/home.jpg',
  }

  constructor(public nav:NavController) {}

  NavigateToAbout(){
    this.nav.navigateForward("/about");
  }

  ngOnInit() {
  }

}
