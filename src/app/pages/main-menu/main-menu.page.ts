import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.page.html',
  styleUrls: ['./main-menu.page.scss'],
})
export class MainMenuPage implements OnInit {
  term="";
  meals:any;
  constructor() { }
  ionChange(event:any) {
    console.log(event.detail.value)
}
  ngOnInit() {
    this.meals=[]
  }

}
