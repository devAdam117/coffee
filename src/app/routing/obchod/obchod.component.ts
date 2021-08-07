import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-obchod',
  templateUrl: './obchod.component.html',
  styleUrls: ['./obchod.component.css']
})
export class ObchodComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.onResize("",window.innerWidth,window.innerHeight)
  }

  //resize variables
imageXpos:number;
imageYpos:number;
  onResize(e,w?,h?){
    let height
    let width    
    if(e==""){
      height=h
      width=w
    
    }
    else {
    height =e.target.innerHeight
    width=e.target.innerWidth
    }
    if(width>1600){
      this.imageYpos=62;
    }
    else if(width<=1500 && width>1400){
      this.imageYpos=60;      

    }
    else if(width<=1400 && width>1300){
      this.imageYpos=55;
      
    }
    else if(width<=1300 && width>1200){
      this.imageYpos=52;
    }
    else if(width<=1200 && width>1100){
      this.imageYpos=52;
    }
    else if(width<=1100 && width>1000){
      this.imageYpos=52;
    }
    else if(width<=1000 && width>900){
      this.imageYpos=52;
    }
    else if(width<=900 && width>800){
      this.imageYpos=52;
      
    }
    else if(width<=800 && width>700){
      this.imageYpos=52;
    }
    else if(width<=700 && width>600){
      this.imageYpos=52;
    }
    else if(width<=600 && width>500){
      this.imageYpos=52;
    }
    else if(width<=500 && width>400){
      this.imageYpos=52;
    }
    else if(width<=400 && width>300){
      this.imageYpos=52;
    }
    else if(width<=300 && width>200){
      this.imageYpos=52;
    }
    else if(width<=200 && width>100){
      this.imageYpos=52;
    }

    
  }

}
