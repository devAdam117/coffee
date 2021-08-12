import { R } from '@angular/cdk/keycodes';
import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit, ViewChild } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { emailValidation } from '../rezervacie/validators';

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
  showContactForm:boolean=true
  infoMessage:number
  fallDown:string
  titleMarginBottom:number
  subscriptionDone:boolean=false;
  titleMarginTop:number

  public askForm:FormGroup
  public newsletterForm:FormGroup
  constructor(public fb:FormBuilder) {
    this.askForm=this.fb.group({
      emailAsk:['',[Validators.required,emailValidation(".",/@/,[".com",".ru",".org",".net",".ir",".in",".uk",".sk",".cz",".au",".ua","de","us"])]],
      name:['',[Validators.required]],
      subject:['',Validators.required],
      text:['',Validators.required]
    
    })
    this.newsletterForm=this.fb.group({
      emailNews:['',[Validators.required,emailValidation(".",/@/,[".com",".ru",".org",".net",".ir",".in",".uk",".sk",".cz",".au",".ua","de","us"])]],

    })
   }
   sendQuestion(data,form){
    console.log(data)
    this.showContactForm=false
    this.infoMessage=form.clientHeight
    let totalHight= this.sideNav.scrollHeight
    let vh = ((this.infoMessage/totalHight)*100)*0.45
    setTimeout(()=>{
      this.fallDown=`translateY(${vh}vh)`
      this.titleMarginBottom=10

    },1)    
  }
  showAskForm(){
    this.showContactForm=true;
    this.titleMarginBottom=15
    setTimeout(()=>{
      this.titleMarginBottom=1


    },1)
  }
    showImg(){
    if(this.mainContainer){
      let mainHeight =this.mainContainer.nativeElement.scrollHeight     
     this.imgHeightOnResize=mainHeight +0.25*this.sideNav.clientHeight     }
   }
   subscribe(data){
     console.log(data)
     this.subscriptionDone=true;
     setTimeout(()=>{this.subscriptionDone=false;},3700)
   }
  @ViewChild('footer') footer
   scrolledDown:boolean=false;
  ngOnInit(): void {
    this.titleMarginTop=0
    this.titleMarginBottom=15
    setTimeout(()=>{    
    this.titleMarginBottom=1
    this.titleMarginTop=3
    setTimeout(()=>{
      this.titleMarginTop=0

    },300)

    },100)    
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
  
  //get
  get emailAsk () {
    return this.askForm.get("emailAsk")
  }
  get name () {
    return this.askForm.get("name")
  }
  get subject () {
    return this.askForm.get("subject")
  }
  get text () {
    return this.askForm.get("text")
  }

  get emailNews(){
    return this.newsletterForm.get("emailNews")
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
