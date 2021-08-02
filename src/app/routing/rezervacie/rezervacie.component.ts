import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit , ElementRef } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { UnsubscriptionError } from 'rxjs';
import { __classPrivateFieldSet } from 'tslib';
import { emailValidation, timeValidation,totalPeopleNum,dateValidation } from './validators';


@Component({
  selector: 'app-rezervacie',
  templateUrl: './rezervacie.component.html',
  styleUrls: ['./rezervacie.component.css']
})
export class RezervacieComponent implements OnInit {

  // variables for showing diff forms..
  public showForm:boolean= false;
  public finishForm: boolean = false;
  public confirmationWindow: boolean = false;
  // emptyslots shows orsuccess or failure 
  emptySlot:boolean = false;
  
  
  //main form 
  public reservationForm : FormGroup

 
  constructor( el: ElementRef, public fb: FormBuilder) { 
    this.reservationForm=this.fb.group({
      name:[''],
      email:['',[Validators.required,emailValidation(".",/@/,[".com",".ru",".org",".net",".ir",".in",".uk",".sk",".cz",".au",".ua","de","us"])]],
      date:['',[Validators.required,dateValidation()]],
      time:['',[Validators.required,timeValidation(["08:00","08:30","09:00","09:30","10:00","10:30","11:00","11:30","12:00","12:30","13:00","13:30","14:00","14:30","15:00","15:30",
      "16:00","16:30","17:00","17:30","18:00","18:30","19:00","19:30","20:00","20:30","21:00","21:30","22:00","22:30","23:00","23:30",])]],
      numOfPeople:['',[ Validators.required, totalPeopleNum([1,2,3,4,5,6,7,8,9,"10+"])]]      
    })
  }
  
  // for button -> "nextstep" purpose variables and  functions 
  public checkMail:boolean= false;
  public checkTime:boolean = false;
  public checkNumOfPeople:boolean= false;
  public checkDate:boolean = false;
  valideDate(){
    this.checkDate=true;
  }
  
  valideMail(){
    this.checkMail=true;
  }
  valideTime(){
    this.checkTime=true;
  }
  validePeopleNum(){
    this.checkNumOfPeople=true;
  }


  // get width size onIniz and responze
  
  ngOnInit(): void {
      this.onResize("",window.innerWidth,window.innerHeight);
  }

  // on submit values for be
  onSubmit(form){
    console.log(form)
  }
  // for validation in component
  get email(){
    return this.reservationForm.get("email");
  }
  get date() {
    return this.reservationForm.get("date");
  }
  get time () {
    return this.reservationForm.get("time");
  }
  get numOfPeople() {
    return this.reservationForm.get("numOfPeople");
  }
  

  //options in inputs
  public times=["08:00","08:30","09:00","09:30","10:00","10:30","11:00","11:30","12:00","12:30","13:00","13:30","14:00","14:30","15:00","15:30",
  "16:00","16:30","17:00","17:30","18:00","18:30","19:00","19:30","20:00","20:30","21:00","21:30","22:00","22:30","23:00","23:30",];
  buttonFontSize:number;
  public sizes =[1,2,3,4,5,6,7,8,9,"10+"];

  //responsive variables
  formFromTop:number ;
  imgHightOnResize:number;
  buttonLineHeight:number;
  onResizeButtonWidth:number;
  imgPosOnResize:number;
  onResizeImgWidth:number
  finalCompWidthOnResize:number;
  finalCompHeightOnResize:number;
  successFontSizeOnResize:number;
  statusTranslationY:string;
  // function that takes care of responsive designof "Rezervácie component.html"
  onResize(event,startingWidth?,startingHeight?):void{
    let width;
    let height;
    if(event!=""){
     width =  event.target.innerWidth;    
     height = event.target.innerHeight; 
    }
    else {
      width = startingWidth;     
      height = startingHeight;

    } 
   

    //WIDTH control
    if(width>1638){
      this.successFontSizeOnResize=1.17
      this.finalCompWidthOnResize=50;
      this.finalCompHeightOnResize=60
    }
    else if(width<=1638 && width>1109){
      this.finalCompWidthOnResize=50
      this.finalCompHeightOnResize=70
      this.onResizeImgWidth=120;
      this.imgPosOnResize=80;
      this.onResizeButtonWidth=83.33;
    }
    else if(width<=1109 && width>800){
      this.finalCompWidthOnResize=70
      this.finalCompHeightOnResize=70
      this.onResizeImgWidth=170;
      this.imgPosOnResize=140;
      this.onResizeButtonWidth=58.88;
    }
    else if(width<=800 && width>600){
      this.finalCompHeightOnResize=70
      this.finalCompWidthOnResize=80
      this.onResizeImgWidth=230;
      this.imgPosOnResize=340;
      this.onResizeButtonWidth=43.47;
    }
    else if (width<=600 && width>400){
      this.finalCompWidthOnResize=95
      this.finalCompHeightOnResize=70
      this.onResizeImgWidth=340;
      this.imgPosOnResize=440;
      this.onResizeButtonWidth=29.41;
    }
    else {
      this.finalCompHeightOnResize=55
      this.finalCompHeightOnResize=77
      this.successFontSizeOnResize=1
      this.finalCompWidthOnResize=100
    }
    if(width>1638){
     this.buttonFontSize=3.8;    

    }
    else if (width<=1638 && width >400){
      this.buttonFontSize=2.6;
    }
    else if (width<=400 && width>304 ){
      this.imgHightOnResize=100
      this.buttonFontSize=2.1;
      this.onResizeImgWidth=500;
      this.imgPosOnResize=450;
      this.onResizeButtonWidth=20;
  }else if (width<=304){
      this.onResizeImgWidth=600;
      this.imgPosOnResize=450;
      this.onResizeButtonWidth=16.66;  
      this.buttonFontSize=1.8;
      this.buttonLineHeight=1.7;
  }
  //HEIGHT figure
  if(height>772){
    this.heightSuccessHandler=10;
  }
  else if (height<=772 && height >455){
    this.heightSuccessHandler=7;

  }
  else if(height<=455 && height >375){
    this.heightSuccessHandler=4
  }
  else if(height<=375 && height >300){
    this.heightSuccessHandler=-3
    this.finalCompHeightOnResize=100

  }
  else {
    this.heightSuccessHandler=-6
    this.finalCompHeightOnResize=100

  }

}

  // slot is open or taken with math prob.
  randomSlot(){
    Math.round(Math.random())==1 ? this.emptySlot=true :this.emptySlot=false;
  }
  
  // on button click show main form
  showEl(){    
    this.showForm=!this.showForm;
    let width =  window.innerWidth;
    if(width>169){
      this.wait(0);
    }
    else {
      this.wait(-90)
    }
      }
  // variables which shows success or error message with code verification via email. => so when emptySlot=true...
  errorMessage:boolean= false;
  successMessage:boolean= false;
  // checking code if it is valid (not if it is code from email)
  checkCode(code):void{    
    code.value!="" ? this.showSuccessMessage():this.showErrorMessage();
  }
  // error handler
  showErrorMessage(){
    this.successMessage=false;
    this.errorMessage=true;
    this.translateY(5);   
    
  }
  showFormatedDate():string{
    let newDate=new Date(this.date.value)
    let year=newDate.getFullYear();
    let month= newDate.getMonth();
    let day= newDate.getDate();
    return `${month}/${day}/${year}`;
  }
  // smooth income of elemnt
  translateY(num:number){
    setTimeout(()=>{
      this.statusTranslationY=`translateY(${num}vh)`;
    },1)
  }
  // variable which takes care how much can element traslateY with dif height size
  heightSuccessHandler:number;
  //success handler with smooth  income of dom el

  showSuccessMessage(){
    this.errorMessage=false;
    this.successMessage=true;
    this.translateY(this.heightSuccessHandler);

  }
  // on submit hde main form and show verification form whether with code verification or with  error message showing that there is no empty slot for current date, time..
  hideEl(){
    
    this.finishForm=true;    
    this.confirmationWindow= true;
    
  }
  // when slot is taken you can still go back and edit your previous form
  showEl_two(){
    this.finishForm=false;
    this.confirmationWindow=false;

  }
  // position dinamicaly form from top
wait(num) { 
  setTimeout(()=>{
    this.formFromTop=num;
  },300)
}
  
  
}
