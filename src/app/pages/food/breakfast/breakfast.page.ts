import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-breakfast',
  templateUrl: './breakfast.page.html',
  styleUrls: ['./breakfast.page.scss'],
})
export class BreakfastPage implements OnInit {
meals:any;
term="";
  constructor() { }

  ngOnInit() {
    this.meals=[
      {
        title:"Egg and bacon", 
        description:"main breakfast meal",
        imgurl:"/assets/images/bacon.jpg"
      },
      {
        title:"Pancake", 
        description:"honey and pancakes",
        imgurl:"/assets/images/pancakes.jpg"
      },
      {
        title:"Sandwich", 
        description:"Cheese sandwich",
        imgurl:"/assets/images/sandwich.jpg"
      },
    ]
  }

}
