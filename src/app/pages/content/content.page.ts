import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.page.html',
  styleUrls: ['./content.page.scss'],
})
export class ContentPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  logScrollStart(){
    console.log("iniciou a interação com o scroll");
  }

  logScrollEnd(){
    console.log("scroll parou de acontecer");
  }

  // logScrolling(e){
  //   console.log(e);
  // }
}
