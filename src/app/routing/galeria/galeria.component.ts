import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';
import { Input } from '@angular/core';
import { MatChipInput, MatChipInputEvent } from '@angular/material/chips';
import {COMMA, E, ENTER} from '@angular/cdk/keycodes';
import { ElementRef, ViewChild,Directive} from '@angular/core';
import {FormControl} from '@angular/forms';
import {MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

export interface Fruit {
  name: string;
}

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})



export class GaleriaComponent implements OnInit {
  //resize variables
  
  scrollImage:number=0; // scroll image onScroll()
  positionText:number=65;// position text onScroll()
  changePosition:string;
  centerImage:number ;  
  chipWidth:number ;
  contentHeight:number;
  bigImgHeight:number;
  bigImgWidth:number;
  bigImgLeft:number;
  nextBtnRight:number;
  prevBtnLeft:number;
  btnFontSize:number;
  btnsTop:number
  btnPositionOnResize:string
  //show variables   
  

  //CHIPS area
  selectable = true;
  removable = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  categoryCtrl = new FormControl();
  filteredCategories: Observable<string[]>;
  categories: string[] = ['Všetko'];
  allCategories: string[] = ['Káva','Nápoje', 'Jedlo', 'Ľudia', 'Priestory', 'Všetko'];
  allImages=[
    {id:1,category:"Nápoje",path:"/assets/gallery/beer1.jpg", status:false,bigSize:false},
    {id:2,category:"Nápoje",path:"/assets/gallery/beer2.jpg", status:false,bigSize:false},
    {id:3,category:"Nápoje",path:"/assets/gallery/beer3.jpg", status:false,bigSize:false},
    {id:4,category:"Nápoje",path:"/assets/gallery/beer4.jpg", status:false,bigSize:false},
    {id:5,category:"Nápoje",path:"/assets/gallery/beer5.jpg", status:false,bigSize:false},
    {id:6,category:"Nápoje",path:"/assets/gallery/beer6.jpg", status:false,bigSize:false},
    {id:7,category:"Nápoje",path:"/assets/gallery/beer7.jpg", status:false,bigSize:false},
    {id:8, category:"Nápoje",path:"/assets/gallery/beer8.jpg", status:false,bigSize:false},
    {id:9,category:"Nápoje",path:"/assets/gallery/beer9.jpg", status:false,bigSize:false},
    {id:10,category:"Nápoje",path:"/assets/gallery/beer10.jpg", status:false,bigSize:false},
    {id:11,category:"Ľudia",path:"/assets/gallery/people1.jpg", status:false,bigSize:false},
    {id:12,category:"Ľudia",path:"/assets/gallery/people2.jpg", status:false,bigSize:false},
    {id:13,category:"Ľudia",path:"/assets/gallery/people3.jpg", status:false,bigSize:false},
    {id:14,category:"Ľudia",path:"/assets/gallery/people4.jpg", status:false,bigSize:false},
    {id:15,category:"Ľudia",path:"/assets/gallery/people5.jpg", status:false,bigSize:false},
    {id:16,category:"Ľudia",path:"/assets/gallery/people6.jpg", status:false,bigSize:false},
    {id:17,category:"Ľudia",path:"/assets/gallery/people7.jpg", status:false,bigSize:false},
    {id:18,category:"Ľudia",path:"/assets/gallery/people8.jpg", status:false,bigSize:false},
    {id:19,category:"Ľudia",path:"/assets/gallery/people9.jpg", status:false,bigSize:false},
    {id:20,category:"Priestory",path:"/assets/gallery/surr1.jpg", status:false,bigSize:false},
    {id:21,category:"Priestory",path:"/assets/gallery/surr2.jpg", status:false,bigSize:false},
    {id:22,category:"Priestory",path:"/assets/gallery/surr3.jpg", status:false,bigSize:false},
    {id:23,category:"Káva",path:"/assets/gallery/coffee1.jpg", status:false,bigSize:false},
    {id:24,category:"Káva",path:"/assets/gallery/coffee2.jpg", status:false,bigSize:false},
    {id:25,category:"Káva",path:"/assets/gallery/coffee3.jpg", status:false,bigSize:false},
    {id:26,category:"Káva",path:"/assets/gallery/coffee4.jpg", status:false,bigSize:false},
    {id:27,category:"Káva",path:"/assets/gallery/coffee5.jpg", status:false,bigSize:false},
    {id:28,category:"Káva",path:"/assets/gallery/coffee6.jpg", status:false,bigSize:false},
    {id:28,category:"Jedlo",path:"/assets/gallery/food1.jpg", status:false,bigSize:false},
    {id:28,category:"Jedlo",path:"/assets/gallery/food2.jpg", status:false,bigSize:false},
    {id:28,category:"Jedlo",path:"/assets/gallery/food3.jpg", status:false,bigSize:false},
    {id:28,category:"Jedlo",path:"/assets/gallery/food4.jpg", status:false,bigSize:false},
    {id:28,category:"Jedlo",path:"/assets/gallery/food5.jpg", status:false,bigSize:false},
    {id:28,category:"Jedlo",path:"/assets/gallery/food6.jpg", status:false,bigSize:false}
  ]
  fiteredImages;


  @ViewChild('categoryInput') categoryInput: ElementRef<HTMLInputElement>;
  hideBigImg2(e){
   if(!e.target.attributes.class.nodeValue.includes("img_background") && !(e.target.attributes.class.nodeValue.includes("previousBtn")
   || e.target.attributes.class.nodeValue.includes("nextBtn"))){     
    this.hideBigImg("diss_mode");
   } 
   else if (e.target.attributes.class.nodeValue.includes("previousBtn")){
    this.hideBigImg("prev_img")

   }
   else if(e.target.attributes.class.nodeValue.includes("nextBtn")){
    this.hideBigImg("next_img")

   }
  }
  
  hideBigImg(mode){
    if(mode=="diss_mode"){
      //when not clicking on existb utton
      this.leftForBigImg=Math.round(Math.random()*2-1)*50;
      setTimeout(()=>{
        this.allImages.forEach(e=>e.bigSize=false);
      },450) 
    }
    else if(mode=="next_img"){
      this.nextImg()
    }
    else if(mode=="prev_img"){
      this.previousImg()
    }
    else {
      //when clicking exit button
      this.allImages.forEach(e=>e.bigSize=false);
      this.leftForBigImg=Math.round(Math.random()*2-1)*50;  
    }
  }
  // currentImg represent currentlyShowed big img from our initial fiteredArray 
  currentImg
  previousImg(){   
    let currImgIndex=this.fiteredImages.indexOf(this.currentImg)
    let minIndex = 0
    if(currImgIndex!=0){
    this.showBigImg(this.fiteredImages[currImgIndex-1])    
    }
    else {      
      this.showBigImg(this.fiteredImages[this.fiteredImages.length-1])
    }
  }
  nextImg(){
    let currImgIndex=this.fiteredImages.indexOf(this.currentImg)
    let maxIndex = this.fiteredImages.length
    if(currImgIndex!=maxIndex-1){
    this.showBigImg(this.fiteredImages[currImgIndex+1])  
    }
    else {
      this.showBigImg(this.fiteredImages[0])
    }

    

  }
  visibilityForBigImg:string="hidden";
  btnLeft:number;
  leftForBigImg:number=-40//position it center on any client width :-)
  topForBigImg:number
  
  @ViewChild('bigImgContainer') imgContainer ; 
  @ViewChild('bigImg') bigImg;
  showBigImg(img_obj){
    this.currentImg=img_obj
    //only one can be big
    this.allImages.forEach(e=>e.bigSize=false);
    img_obj.bigSize=true;
    
   

    // should replace with observable??.
    setTimeout(()=>{this.centerImg()},1)  ;
    
  }  
 
  centerImg(){           
    let containerWidth =this.imgContainer.nativeElement.clientWidth;
    let bigImgWidth = this.bigImg.nativeElement.clientWidth;
    let windowWidth =  document.querySelector(".top_img").clientWidth; 
    let windowHeight =  document.querySelector(".top_img").clientHeight; 
    let containerHeight = this.imgContainer.nativeElement.clientHeight;
    this.topForBigImg=100*(1-(containerHeight/windowHeight))/2;    
      this.visibilityForBigImg="visible";         
      this.leftForBigImg= 100*(1-(containerWidth/windowWidth))/2;
      this.btnLeft=100*((containerWidth-bigImgWidth)/2)/containerWidth;
  }

  onChipIn(){     
    
    if(this.categories.includes("Všetko")){       
      
      this.fiteredImages=this.allImages.sort(()=>{
        //sort images randoomly on every window.load()        
       return Math.random()-0.5;       
      });
    }    
    // else we filter them.. by checking selected categories right after adding one
    else {
      // work with fictive arr that is suitable for .filter because of settling true or false for each element
      let proccedingArr;
      
      this.categories.includes("Ľudia")? proccedingArr=this.allImages.map(e=> e.category==="Ľudia"? (e.status=true, e):(e.status,e)):(proccedingArr=this.allImages.map(e=> e.category==="Ľudia"? (e.status=false, e):(e.status,e)));
      this.categories.includes("Nápoje")? proccedingArr=this.allImages.map(e=> e.category==="Nápoje"? (e.status=true,e):(e.status,e)):(proccedingArr=this.allImages.map(e=> e.category==="Nápoje"? (e.status=false, e):(e.status,e)));
      this.categories.includes("Jedlo")? proccedingArr=this.allImages.map(e=> e.category==="Jedlo"? (e.status=true,e):(e.status,e)):(proccedingArr=this.allImages.map(e=> e.category==="Jedlo"? (e.status=false, e):(e.status,e)));
      this.categories.includes("Priestory")? proccedingArr=this.allImages.map(e=> e.category==="Priestory"? (e.status=true,e):(e.status,e)):(proccedingArr=this.allImages.map(e=> e.category==="Priestory"? (e.status=false, e):(e.status,e)));
      this.categories.includes("Káva")? proccedingArr=this.allImages.map(e=> e.category==="Káva"? (e.status=true,e):(e.status,e)):(proccedingArr=this.allImages.map(e=> e.category==="Káva"? (e.status=false, e):(e.status,e)));
      
      // filter and show only those with status==true
      this.fiteredImages=proccedingArr.filter(e=>e.status===true);
      // sort filteredImages by chips order in input(by this.categories)
      this.fiteredImages.sort((obj_1,obj_2)=>{
        return this.categories.indexOf(obj_1.category)-this.categories.indexOf(obj_2.category);
      })
      

    }
    
  }
  
  


  constructor( { nativeElement }: ElementRef<HTMLImageElement> ) { 
    const supports = 'loading' in HTMLImageElement.prototype;

    if (supports) {
      nativeElement.setAttribute('loading', 'lazy');
    }
    
    this.filteredCategories = this.categoryCtrl.valueChanges.pipe(
      startWith(null),
      map((category: string | null) => category ? this._filter(category) : this.allCategories.slice()));

  }

  ngOnInit(): void {
    this.onResize("",window.innerWidth,window.innerHeight)
    this.onChipIn()
  }

  add(event: MatChipInputEvent, input): void {
    const value = (event.value || '').trim();

    // add category
    if (value) {
      if(value=="Všetko"){
        this.categories.splice(0,this.categories.length)
        this.categories.push(value);
      }
      else {
        let index = this.categories.indexOf("Všetko")
        // all are displayed
        if(index>-1){
          this.categories.splice(index,1)
          this.categories.push(value)
        }
        //they are filtered
        else {

        if(this.categories.indexOf(value)>-1){
          //delete already adding value
            let index = this.categories.indexOf(value)
            this.categories.splice(index,1)
            this.categories.push(value);
          }
          else {
            this.categories.push(value);
          }

        }
      }
      
    }
    

    // Clear the input value
    input.value=""      
    this.categoryCtrl.setValue(null);
    this.onChipIn();
  }

  remove(category: string): void {
    const index = this.categories.indexOf(category);

    if (index >= 0) {
      this.categories.splice(index, 1);
    }
    this.onChipIn();
  }
  

  selected(event: MatAutocompleteSelectedEvent): void {
  if(event.option.viewValue=="Všetko"){
      this.categories.splice(0,this.categories.length);
      this.categories.push(event.option.viewValue);
      this.categoryInput.nativeElement.value = '';
      this.categoryCtrl.setValue(null);     
    }
    else {
      this.categories.indexOf("Všetko")==0 ? this.categories.splice(0,1):0
      if(this.categories.indexOf(event.option.viewValue)>-1){
        
          let index = this.categories.indexOf(event.option.viewValue)
          this.categories.splice(index,1)
          this.categories.push(event.option.viewValue);
          this.categoryInput.nativeElement.value = '';
          this.categoryCtrl.setValue(null);
      }
      else {
        this.categories.push(event.option.viewValue);
        this.categoryInput.nativeElement.value = '';
        this.categoryCtrl.setValue(null);
      }
      
    }
    
      this.onChipIn()
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allCategories.filter(category => category.toLowerCase().includes(filterValue));
  }

  //resize fncton
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
    if(width>1550){
      this.chipWidth=50   
      this.btnPositionOnResize="fixed"
      this.btnsTop=50
      this.prevBtnLeft=5
      this.nextBtnRight=5
      this.btnFontSize=4  
      
    }
      
    else if (width<=1550 && width>886){
    this.centerImage=20
    this.btnPositionOnResize="fixed"
    this.btnsTop=50

    this.prevBtnLeft=0
    this.nextBtnRight=0
    this.btnFontSize=4
    this.chipWidth=70
    

    }
    
    else {
      this.centerImage=40
      this.btnPositionOnResize="absolute"
      this.btnsTop=85      
      this.chipWidth=95     
      this.btnFontSize=3.5

    }
  }
 
  
  onScroll(){
    
    
  //get  fixed header mat-sidenav-content
  let height= document.querySelector("mat-sidenav-content")
  let currentImgDisappearanceRatio
  let startDissapearanceRatio
  let endDissapearanceRatio = 1
  let imgScrollRatio  
  // see how much I scrolled
  
  let imgHeight =document.querySelector(".top_img").scrollHeight
  // show how many pixels are imgHeight
 
  // convert those pixels in to the VH so we can add on scroll VH  
 height.addEventListener("scroll",()=>{
  currentImgDisappearanceRatio=(height.scrollHeight-height.scrollTop)/942
  startDissapearanceRatio = height.scrollHeight/942  
  if(endDissapearanceRatio/currentImgDisappearanceRatio<1 && currentImgDisappearanceRatio!=startDissapearanceRatio){
    imgScrollRatio = (startDissapearanceRatio-currentImgDisappearanceRatio)/(startDissapearanceRatio-endDissapearanceRatio)
  }
  else if(endDissapearanceRatio/currentImgDisappearanceRatio>=1 && currentImgDisappearanceRatio!=startDissapearanceRatio ){
    imgScrollRatio = 1
  }
  else if(currentImgDisappearanceRatio==startDissapearanceRatio){
    imgScrollRatio = 0

  }
  this.scrollImage= -(imgHeight/50)*imgScrollRatio
  
})   

  }
  
  
  
 

}


