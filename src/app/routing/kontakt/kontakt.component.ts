import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-kontakt',
  templateUrl: './kontakt.component.html',
  styleUrls: ['./kontakt.component.css']
})
export class KontaktComponent implements OnInit {
  sideNav = document.querySelector("mat-sidenav-content")
  heightIsBig:boolean
  iconWrapperWidth:number
  atTheBottom:boolean
  bottomOnScroll:number
  positionOnScroll:string
  iconMoveRight:string
  iconMoveTop:string
  iconMoveLeft:string
  imgHeightOnResize:number
  constructor() {
    
   }
    showImg(){
    if(this.mainContainer){
      let mainHeight =this.mainContainer.nativeElement.scrollHeight     
     this.imgHeightOnResize=mainHeight +0.25*this.sideNav.clientHeight     }
   }
  @ViewChild('footer') footer
   scrolledDown:boolean=false;
  ngOnInit(): void {
    
    setTimeout(()=>{this.showImg()},1)
    //this.textArea.nativeElement.cols=150;
    this.onResize("",window.innerWidth,window.innerHeight)
    this.sideNav.clientHeight>=703 ? this.heightIsBig=true:this.heightIsBig=false
    this.sideNav.addEventListener('scroll',()=>{
      this.onResize("",window.innerWidth,window.innerHeight)
      if(this.sideNav.scrollTop>0){
        
        this.scrolledDown=true
      }
      else {
        this.scrolledDown=false
      }      
     // console.log(this.sideNav.scrollTop)
      let currentFromTop=this.sideNav.scrollTop
      let scrolableFromTop = this.sideNav.scrollHeight-this.sideNav.clientHeight
      //move icons...
      if(currentFromTop>=scrolableFromTop*0.95){    
        this.iconMoveRight="translateX(0rem)"
        this.iconMoveLeft="translateX(0rem)"
        this.iconMoveTop="translateY(0rem)"
        
      }
      else { 
        this.iconMoveRight="translateX(-1rem)"
        this.iconMoveLeft="translateX(1rem)"
        this.iconMoveTop="translateY(1rem)"       
      }
  })

  }
  
  
    /* let currentHeight = document.querySelector("mat-sidenav-content").scrollTop
    if(currentHeight>0){
      this.scrolledDown=true;
    }    
    else {
      this.scrolledDown=false;
    } */
    
  @ViewChild('infoCont') mainContainer
  onResize(e,w?,h?){
    this.showImg()
   
    
    this.sideNav.clientHeight>=703 ? this.heightIsBig=true:this.heightIsBig=false
    let height
    let width    
    if(e===""){
      height=h
      width=w
    
    }

    else {
    height =e.target.innerHeight
    width=e.target.innerWidth
    }
    if(width>1600){ 
      this.iconWrapperWidth=20
                }
    else if(width<=1500 && width>1400){
           
      this.iconWrapperWidth=25

    }
    else if(width<=1400 && width>1300){
      this.iconWrapperWidth=30

                }
    else if(width<=1300 && width>1200){
      this.iconWrapperWidth=35

                }
    else if(width<=1200 && width>1100){
      this.iconWrapperWidth=40

                }
    else if(width<=1100 && width>1000){
      this.iconWrapperWidth=45

                }
    else if(width<=1000 && width>900){
      this.iconWrapperWidth=50
      
     
    }
    else if(width<=900 && width>800){
      this.iconWrapperWidth=60

                 
    }
    else if(width<=800 && width>700){
      this.iconWrapperWidth=80

               }
    else if(width<=700 && width>600){
      this.iconWrapperWidth=90
      
         }
    else if(width<=600 && width>500){
      this.iconWrapperWidth=90
      
     
      
    }
    else if(width<=500 && width>400){
      this.iconWrapperWidth=90
      
     
      
    }
    else if(width<=400 && width>300){
      this.iconWrapperWidth=90
      
     
      
    }
    else if(width<=300 && width>200){
      this.iconWrapperWidth=90
      
     
      
    }
    else if(width<=200 && width>100){
      this.iconWrapperWidth=90  
     
      
    }
  }

}
