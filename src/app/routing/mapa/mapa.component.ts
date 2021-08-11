import { formatCurrency } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {
  leftOnLoad:number
  topOnLoad:number
  iFrameWidth:number
  imageHover:boolean
  subTextMarginLeft:number
  backgroundColorOnWidth:string
  textToShow:string
  textContent:Array<string>=["Nachádzame sa v centre Martina, v blízkosti Milénia",
  "Ponúkame domáce 11° remesélne pivko (gazda) už od 1,4 €",
  "Pražená kávička so sebou od 1 €",
"Každý piatok super menu za 4 € (burger podľa vlastného výberu + pivko gazda) "]
  constructor() { }

  ngOnInit(): void {
    setTimeout(()=>{
      this.leftOnLoad=0
      this.topOnLoad=10
    },400)
    this.onResize("",window.innerWidth,window.innerHeight)
    setTimeout(()=>{
      !this.imageHover ?  this.hoverHandler():0;     
    },5000)
  }
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
      this.iFrameWidth=90
      this.backgroundColorOnWidth="rgba(0, 0, 0,0.035)"
    }
    else if(width<=1500 && width>1400){
      this.iFrameWidth=90      
      this.backgroundColorOnWidth="rgba(0, 0, 0,0.035)"
    }
    else if(width<=1400 && width>1300){
      this.iFrameWidth=90
      this.backgroundColorOnWidth="rgba(0, 0, 0,0.035)"
    }
    else if(width<=1300 && width>1200){
      this.iFrameWidth=90
      this.backgroundColorOnWidth="rgba(0, 0, 0,0.035)"
    }
    else if(width<=1200 && width>1100){
      this.iFrameWidth=90
      this.backgroundColorOnWidth="rgba(0, 0, 0,0.035)"
    }
    else if(width<=1100 && width>1000){
      this.iFrameWidth=90
      this.backgroundColorOnWidth="rgba(0, 0, 0,0.035)"
    }
    else if(width<=1000 && width>900){
      this.iFrameWidth=90 
      this.backgroundColorOnWidth="rgba(0, 0, 0,0.035)"
    }
    else if(width<=900 && width>800){
      this.iFrameWidth=90
      this.backgroundColorOnWidth="rgba(0, 0, 0,0.25)"
      
    }
    else if(width<=800 && width>700){
      this.iFrameWidth=90
      this.backgroundColorOnWidth="rgba(0, 0, 0,0.35)"
    }
    else if(width<=700 && width>600){
      this.iFrameWidth=100
      this.backgroundColorOnWidth="rgba(0, 0, 0,0.35)"
    }
    else if(width<=600 && width>500){
      this.iFrameWidth=100
      this.backgroundColorOnWidth="rgba(0, 0, 0,0.35)"

      
    }
    else if(width<=500 && width>400){
      this.iFrameWidth=100
      this.backgroundColorOnWidth="rgba(0, 0, 0,0.35)"

      
    }
    else if(width<=400 && width>300){
      this.iFrameWidth=100
      this.backgroundColorOnWidth="rgba(0, 0, 0,0.35)"

      
    }
    else if(width<=300 && width>200){
      this.iFrameWidth=100
      this.backgroundColorOnWidth="rgba(0, 0, 0,0.35)"

      
    }
    else if(width<=200 && width>100){
      this.iFrameWidth=100
      this.backgroundColorOnWidth="rgba(0, 0, 0,0.35)"

      
    }

    
  }
  hoverHandler(){
    if(!this.imageHover){
    this.imageHover=true
    let i =0;
    this.textToShow=this.textContent[i]
    //infinite loop through text array
    setInterval(()=>{
      if(i<this.textContent.length){ 
        this.subTextMarginLeft=3
        i++;
        this.textToShow=this.textContent[i]      
        if(i===this.textContent.length-1){ 
          i=-1;
        }
      }
    },5000)
      
    
    
    
    setTimeout(()=>{
      this.subTextMarginLeft=0      
    },1)
  }
  
}

}
