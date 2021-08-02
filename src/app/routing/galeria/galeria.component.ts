import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';
import { Input } from '@angular/core';
import { MatChipInput, MatChipInputEvent } from '@angular/material/chips';
import {COMMA, E, ENTER} from '@angular/cdk/keycodes';
import { ElementRef, ViewChild} from '@angular/core';
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
  scrollImage:number=0 // scroll image onScroll()
  positionText:number=65// position text onScroll()
  changePosition:string
  centerImage:number    
  //show variables   
  

  //CHIPS area
  selectable = true;
  removable = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  categoryCtrl = new FormControl();
  filteredCategories: Observable<string[]>;
  categories: string[] = ['Všetko'];
  allCategories: string[] = ['Káva','Pivo', 'Jedlo', 'Ľudia', 'Priestory', 'Všetko'];
  allImages=[
    {id:1,category:"Pivo",path:"assets/gallery/beer1.jpg", status:false},
    {id:2,category:"Pivo",path:"assets/gallery/beer1.jpg", status:false},
    {id:3,category:"Pivo",path:"assets/gallery/beer1.jpg", status:false},
    {id:4,category:"Pivo",path:"assets/gallery/beer1.jpg", status:false},
    {id:5,category:"Pivo",path:"assets/gallery/beer1.jpg", status:false},
    {id:6,category:"Pivo",path:"assets/gallery/beer1.jpg", status:false},
    {id:7,category:"Pivo",path:"assets/gallery/beer1.jpg", status:false},
    {id:8,category:"Ľudia",path:"assets/gallery/people1.jpg", status:false},
    {id:9,category:"Ľudia",path:"assets/gallery/people2.jpg", status:false},
    {id:10,category:"Ľudia",path:"assets/gallery/people3.jpg", status:false},
    {id:11,category:"Ľudia",path:"assets/gallery/people4.jpg", status:false},
    {id:12,category:"Ľudia",path:"assets/gallery/people5.jpg", status:false},
    {id:13,category:"Ľudia",path:"assets/gallery/people6.jpg", status:false},
    {id:14,category:"Ľudia",path:"assets/gallery/people7.jpg", status:false},
    {id:15,category:"Priestory",path:"assets/gallery/surr1.jpg", status:false},
    {id:16,category:"Priestory",path:"assets/gallery/surr2.jpg", status:false},
    {id:17,category:"Priestory",path:"assets/gallery/surr3.jpg", status:false}
  ]
  fiteredImages;


  @ViewChild('categoryInput') categoryInput: ElementRef<HTMLInputElement>;

  
  onChipIn(){     
       
    if(this.categories.includes("Všetko")){
      this.fiteredImages=this.allImages.sort((obj_1,obj_2)=>{
        //sort images randoomly on every window.load() by its id +0-100
        
        return (obj_1.id+Math.round(Math.random()*100))-(obj_2.id+Math.round(Math.random()*100));
      });
    }
    /* else if(this.categories.length==0){
      this.fiteredImages=[];
    } */
    // else we filter them.. by checking selected categories right after adding one
    else {
      // work with fictive arr that is suitable for .filter because of settling true or false for each element
      let proccedingArr;
      
      this.categories.includes("Ľudia")? proccedingArr=this.allImages.map(e=> e.category==="Ľudia"? (e.status=true, e):(e.status,e)):(proccedingArr=this.allImages.map(e=> e.category==="Ľudia"? (e.status=false, e):(e.status,e)));
      this.categories.includes("Pivo")? proccedingArr=this.allImages.map(e=> e.category==="Pivo"? (e.status=true,e):(e.status,e)):(proccedingArr=this.allImages.map(e=> e.category==="Pivo"? (e.status=false, e):(e.status,e)));
      this.categories.includes("Jedlo")? proccedingArr=this.allImages.map(e=> e.category==="Jedlo"? (e.status=true,e):(e.status,e)):(proccedingArr=this.allImages.map(e=> e.category==="Jedlo"? (e.status=false, e):(e.status,e)));
      this.categories.includes("Priestory")? proccedingArr=this.allImages.map(e=> e.category==="Priestory"? (e.status=true,e):(e.status,e)):(proccedingArr=this.allImages.map(e=> e.category==="Priestory"? (e.status=false, e):(e.status,e)));
      this.categories.includes("Káva")? proccedingArr=this.allImages.map(e=> e.category==="Káva"? (e.status=true,e):(e.status,e)):(proccedingArr=this.allImages.map(e=> e.category==="Káva"? (e.status=false, e):(e.status,e)));
      console.log(proccedingArr);
      // filter and show only those with status==true
      this.fiteredImages=proccedingArr.filter(e=>e.status===true);
      // sort filteredImages by chips order in input(by this.categories)
      this.fiteredImages.sort((obj_1,obj_2)=>{
        return this.categories.indexOf(obj_1.category)-this.categories.indexOf(obj_2.category);
      })
      

    }
    
  }
  
  


  constructor() { 
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
      
    }
      
    else if (width<=1550 && width>886)
    this.centerImage=20
    
    else {
      this.centerImage=40

    }
  }
 
  
  onScroll(){
    
    
  //get  fixed header mat-sidenav-content
  let height= document.querySelector("mat-sidenav-content")
  let currentImgDisappearanceRatio
  let startDissapearanceRatio
  let endDissapearanceRatio = 1
  let imgScrollRatio
  document.querySelector("mat-sidenav-content")
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
  //console.log(imgHeight)
})   

  }
  
  
  
 

}


