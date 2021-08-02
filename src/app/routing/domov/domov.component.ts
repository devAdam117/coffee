import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-domov',
  templateUrl: './domov.component.html',
  styleUrls: ['./domov.component.css']
})
export class DomovComponent implements OnInit {
    text:string="";
    items:string;
    r
  allImgs:Array<string>=["assets/pub2.jpg","assets/pub3.jpg","assets/terasa.jpg","assets/coffee.jpg","assets/coffee2.jpg","assets/grillparty.jpg",
    "assets/vycap.jpg","assets/beer.jpg","assets/beer2.jpg"];
    images:Array<object>=[
      {path: 'assets/coffee2.jpg'},
      {path: 'assets/coffee.jpg'},
      {path: 'assets/pub2.jpg'},
      {path: 'assets/pub3.jpg'},
      {path: 'assets/pub4.jpg'},
      {path: 'assets/pub5.jpg'},
      {path: 'assets/pub6.jpg'},
      {path: 'assets/terasa.jpg'},     
      {path: 'assets/grillparty.jpg'},
      {path: 'assets/vycap.jpg'},
      {path: 'assets/beer.jpg'},
      {path: 'assets/beer2.jpg'},
    ];
    currentImg= "assets/coffee2.jpg";
    //  ak currentImg==?  => this.text= 
  constructor() {
    
   }
 
  ngOnInit(): void {
    
    
  }

}
