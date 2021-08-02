import { Component, OnInit, ViewChild,ElementRef} from '@angular/core';
import { Router } from '@angular/router'
import {Location} from '@angular/common';
import { NavigationCancel } from '@angular/router';
import { NavigationStart } from '@angular/router';
import { NavigationEnd } from '@angular/router';
import { NavigationError } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  public startingWidth:number ;
  public logoWidth: number ;
  public currentRoute:string;
  public loading : boolean = true;
  public diameter:number ;
  constructor(private router:Router, private route:Location) {
   router.events.subscribe(val=>{
    this.currentRoute= this.route.path();
    this.navigationChanger(val);
   }    
    )} 

  openSidenavFlag = false;
      // Stuff for resizing logo, nav items, showind/dissepearing sidenav...
  public isMenuOpen: boolean = false; 
  logoFontSize:number;
  leftSpace:number;
  ngOnInit(): void {   
    this.startingWidth= window.innerWidth
    this.logoHandler(false,this.startingWidth);
    this.currentRoute=this.route.path();    
    
    if(this.startingWidth<800){
     
      this.openSidenavFlag=true;
    }
    else {
      this.openSidenavFlag=false;
      this.isMenuOpen=false;      
    }
  }
  // spin wheel while loading content for router
  navigationChanger(event): void {
    
    if (event instanceof NavigationStart) {      
      this.loading = true
    }
    if (event instanceof NavigationEnd) {
      this.loading=false
     
      
      
      
    }
    if (event instanceof NavigationCancel) {
      this.loading = false
    }
    if (event instanceof NavigationError) {
      this.loading = false
    }
  }

  

  /*urlChecker(url:string):void{
    this.currentRoute=url;
    console.log(url);
  }*/

  onResize(event){  
    this.logoHandler(event);       
    if(event.target.innerWidth<1050){

      this.openSidenavFlag=true;     
    }
    else {
      this.openSidenavFlag=false; 
      this.isMenuOpen=false;

    }
  }  
  checkMyHeight(e){
    //console.log(e.scrollTop)
  }
  logoHandler(event,onInitWidth?:number):void{
    let width:number;
    if(event){
     width = event.target.innerWidth; 
    }else{
       width= onInitWidth;
    }

    if(width>=1300){
    this.logoWidth=13;
    this.diameter=120;
    
    }else if(width<1300 && width>=1050){
      this.logoWidth=20
      this.diameter=120;
    }
    else if(width<1050 && width>=900){
    this.logoWidth=10;
    this.diameter=100;

    }else if(width<900 && width>=801){
    this.logoWidth=10;
    this.diameter=100;

    }else if(width<=800 && width>=600){
    this.logoWidth=13;
    this.diameter=100;


    }else if(width<600 && width>=305){
    this.logoWidth=13;
    this.diameter=80;

    }else {
      this.logoFontSize=1.8;
      this.logoWidth=15;
      this.leftSpace=0;
      this.diameter=50;

    }

    

    

  }
  

}
