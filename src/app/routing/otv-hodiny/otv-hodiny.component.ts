import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-otv-hodiny',
  templateUrl: './otv-hodiny.component.html',
  styleUrls: ['./otv-hodiny.component.css']
})
export class OtvHodinyComponent implements OnInit {
  logoWidth:number;
  startingWidth:number;
  backImgWidth:number;
  xPosImg:number;
  yPosImg:number;
  scheduleLeft:number;
  scheduleWidth:string;
  scheduleFontSize:number;
  scheduleHeadingFontSize:number;
  scheduleTimeFontSize:number;
  backImgHeight:number;
  logoFont:number;
  logoContTop:number;
  moveOnLoad:number;
  scheduleFitWidth:string;
  moveOnLoadTop:number;
  
  constructor() { }

  ngOnInit(): void { 
       
    this.onResize("",window.innerWidth,window.innerHeight);
    if(window.innerWidth<=280 && window.innerWidth>180){
      this.moveContent(0);
    }
    else{
    this.moveContent(5);
    }
   
    
  }
  moveContent(num){
    setTimeout(()=>{
      this.moveOnLoad=num;
    },300)    
  }

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
}
  onResize(event,startingWidth?,startingHeight?):void{
    console.log(1)
    let width;
    let height;
    if(event!=""){
     width =  event.target.innerWidth;
     height = event.target.innerHeight
    }
    else {
      width = startingWidth;
      height = startingHeight;
    }
    //
    if(width>780 ){
      this.scheduleWidth="fit-content"

      if(height>880){
        this.logoWidth=30;
        this.moveOnLoadTop=15;
        this.xPosImg=240;
        this.yPosImg=50;
      }
      else if (height<=880 && height>780){
        this.logoWidth=30;
        this.xPosImg=240;
        this.yPosImg=50;
        
        this.moveOnLoadTop=15;
      }else if (height<=780 && height>680){
        this.logoWidth=30;
        this.backImgHeight=70;
        this.logoContTop=70;
        this.moveOnLoadTop=14;
        this.xPosImg=240;
        this.yPosImg=50;
        
      }else if (height<=680 && height>580){
        this.logoWidth=30;
        this.backImgHeight=80
        this.logoContTop=75;
        this.moveOnLoadTop=17;
        this.xPosImg=240;
        this.yPosImg=50;
        
      }else if (height<=580 && height>480){
        this.logoWidth=30;
        this.backImgHeight=100
        this.logoContTop=95;
        this.moveOnLoadTop=21;
        this.xPosImg=240;
        this.yPosImg=50;
        
      }else if (height<=480 && height>380){
        this.logoWidth=30;
        this.backImgHeight=130
        this.logoContTop=125;
        this.moveOnLoadTop=27;
        this.xPosImg=240;
        this.yPosImg=50;
        
      }else if (height<=380 && height>280){
        this.logoWidth=30;
        this.backImgHeight=170
        this.logoContTop=175;
        this.moveOnLoadTop=35;
        this.xPosImg=240;
        this.yPosImg=50;
        
      }else if (height<=280 && height>180){
        this.logoWidth=30;
        this.backImgHeight=280
        this.logoContTop=290;
        this.moveOnLoadTop=55;
        this.xPosImg=240;
        this.yPosImg=50;
        
      }else if (height<=180 && height>80){
        //
        
      }else if (height<=80 ){
        //
      }
    }
    //
    else if (width<=780 && width>680){
      this.scheduleWidth="fit-content"

      if(height>880){
        this.moveOnLoadTop=12;
        this.logoWidth=30;
        this.xPosImg=240;
        this.yPosImg=50;
      }
      else if (height<=880 && height>780){
        this.moveOnLoadTop=13;
        this.logoWidth=30;
        this.xPosImg=240;
        this.yPosImg=50;

      }else if (height<=780 && height>680){
        this.moveOnLoadTop=13;
        this.logoWidth=30;
        this.backImgHeight=70;
        this.logoContTop=70;
        this.xPosImg=240;
        this.yPosImg=50;
        
      }else if (height<=680 && height>580){
        this.moveOnLoadTop=15;
        this.logoWidth=30;
        this.backImgHeight=80;
        this.logoContTop=80;
        this.xPosImg=240;
        this.yPosImg=50;
        
      }else if (height<=580 && height>480){
        this.moveOnLoadTop=18;
        this.logoWidth=30;
        this.backImgHeight=94;
        this.logoContTop=94;
        this.xPosImg=240;
        this.yPosImg=50;
        
      }else if (height<=480 && height>380){
        this.moveOnLoadTop=24;
        this.logoWidth=30;
        this.backImgHeight=120;
        this.logoContTop=120;
        this.xPosImg=240;
        this.yPosImg=50;
        
      }else if (height<=380 && height>280){
        this.moveOnLoadTop=32;
        this.logoWidth=30;
        this.backImgHeight=162;
        this.logoContTop=162;
        this.xPosImg=240;
        this.yPosImg=50;
        
      }else if (height<=280 && height>180){
        this.moveOnLoadTop=52;
        this.logoWidth=30;
        this.backImgHeight=260;
        this.logoContTop=260;
        this.xPosImg=240;
        this.yPosImg=85;
        
      }else if (height<=180 && height>80){
        //
      }else if (height<=80 ){
        //
      }

    }
    //
    else if (width<=680 && width>580){
      this.scheduleWidth="fit-content"

      if(height>880){
        this.moveOnLoadTop=12;
        this.logoWidth=30;
        this.xPosImg=240;
        this.yPosImg=50;
        

      }
      else if (height<=880 && height>780){
        this.moveOnLoadTop=12;
        this.logoWidth=30;
        this.xPosImg=240;
        this.yPosImg=50;

      }else if (height<=780 && height>680){
        this.moveOnLoadTop=13;
        this.logoWidth=30;
        this.backImgHeight=68;
        this.logoContTop=68;
        this.xPosImg=240;
        this.yPosImg=50;
        
        
      }else if (height<=680 && height>580){
        this.moveOnLoadTop=16;
        this.logoWidth=30;
        this.backImgHeight=79;
        this.logoContTop=79;
        this.xPosImg=240;
        this.yPosImg=50;
      }else if (height<=580 && height>480){
        this.moveOnLoadTop=19;
        this.logoWidth=30;
        this.backImgHeight=95;
        this.logoContTop=95;
        this.xPosImg=240;
        this.yPosImg=50;
        
      }else if (height<=480 && height>380){
        this.moveOnLoadTop=24;
        this.logoWidth=30;
        this.backImgHeight=120;
        this.logoContTop=120;
        this.xPosImg=240;
        this.yPosImg=50;
        
      }else if (height<=380 && height>280){
        this.moveOnLoadTop=32;
        this.logoWidth=30;
        this.backImgHeight=165;
        this.logoContTop=165;
        this.xPosImg=240;
        this.yPosImg=50;
        
      }else if (height<=280 && height>180){
        this.moveOnLoadTop=42;
        this.logoWidth=30;
        this.backImgHeight=260;
        this.logoContTop=260;
        this.xPosImg=240;
        this.yPosImg=50;
        
      }else if (height<=180 && height>80){
//
    this.moveOnLoadTop=90;
        this.logoWidth=30; 
        this.backImgHeight=630;
        this.logoContTop=630;      
        this.xPosImg=240;
        this.yPosImg=50;
        
      }else if (height<=80 ){
        //
      }
      
    }
    //
    else if (width<=580 && width>480){
      this.scheduleWidth="fit-content"

      if(height>880){
        this.moveOnLoadTop=12;
        this.logoWidth=30;       
        this.xPosImg=240;
        this.yPosImg=50;
      }
      else if (height<=880 && height>780){
        this.moveOnLoadTop=12;
        this.logoWidth=30;  

        this.xPosImg=240;
        this.yPosImg=50;

      }else if (height<=780 && height>680){
        this.moveOnLoadTop=12;
        this.logoWidth=30; 
        this.backImgHeight=70;
        this.logoContTop=70;      
        this.xPosImg=240;
        this.yPosImg=50;
        
      }else if (height<=680 && height>580){
        this.moveOnLoadTop=12;
        this.logoWidth=30; 
        this.backImgHeight=80;
        this.logoContTop=80;      
        this.xPosImg=240;
        this.yPosImg=50;
        
      }else if (height<=580 && height>480){
        this.moveOnLoadTop=14;
        this.logoWidth=30; 
        this.backImgHeight=95;
        this.logoContTop=95;      
        this.xPosImg=240;
        this.yPosImg=50;
        
      }else if (height<=480 && height>380){
        this.moveOnLoadTop=17;
        this.logoWidth=30; 
        this.backImgHeight=118;
        this.logoContTop=118;      
        this.xPosImg=240;
        this.yPosImg=50;
        
      }else if (height<=380 && height>280){
        this.moveOnLoadTop=24;
        this.logoWidth=30; 
        this.backImgHeight=170;
        this.logoContTop=170;      
        this.xPosImg=240;
        this.yPosImg=50;
        
      }else if (height<=280 && height>180){
        this.moveOnLoadTop=30;
        this.logoWidth=30; 
        this.backImgHeight=230;
        this.logoContTop=230;      
        this.xPosImg=240;
        this.yPosImg=50;
        
      }else if (height<=180 && height>80){
        this.moveOnLoadTop=70;
        this.logoWidth=30; 
        this.backImgHeight=630;
        this.logoContTop=630;      
        this.xPosImg=240;
        this.yPosImg=50;
        //
      }else if (height<=80 ){
        //
      }
      
    }
    //
    else if (width<=480 && width>380){
      this.scheduleWidth="fit-content"

      if(height>880){
        this.moveOnLoadTop=12;
        this.logoWidth=30; 
        this.backImgWidth=230
        //this.backImgHeight=170;
        //this.logoContTop=11;      
        this.xPosImg=300;
        this.yPosImg=50;
      }
      else if (height<=880 && height>780){
        this.moveOnLoadTop=12;
        this.logoWidth=30; 
        this.backImgWidth=230
        //this.backImgHeight=170;
        //this.logoContTop=11;      
        this.xPosImg=300;
        this.yPosImg=50;

      }else if (height<=780 && height>680){
        this.moveOnLoadTop=12;
        this.logoWidth=30; 
        this.backImgWidth=230
        this.backImgHeight=70;
        //this.logoContTop=11;      
        this.xPosImg=300;
        this.yPosImg=50;
        
      }else if (height<=680 && height>580){
        this.moveOnLoadTop=13;
        this.logoWidth=30; 
        this.backImgWidth=230
        this.backImgHeight=83;
        this.logoContTop=83;      
        this.xPosImg=300;
        this.yPosImg=50;
        
      }else if (height<=580 && height>480){
        this.moveOnLoadTop=15;
        this.logoWidth=30; 
        this.backImgWidth=230
        this.backImgHeight=100;
        this.logoContTop=100;      
        this.xPosImg=300;
        this.yPosImg=50;
        
      }else if (height<=480 && height>380){
        this.moveOnLoadTop=19;
        this.logoWidth=30; 
        this.backImgWidth=230
        this.backImgHeight=123;
        this.logoContTop=123;      
        this.xPosImg=300;
        this.yPosImg=50;
        
      }else if (height<=380 && height>280){
        this.moveOnLoadTop=21;
        this.logoWidth=30; 
        this.backImgWidth=230
        this.backImgHeight=155;
        this.logoContTop=155;      
        this.xPosImg=300;
        this.yPosImg=50;
        
      }else if (height<=280 && height>180){
        this.moveOnLoadTop=26;
        this.logoWidth=30; 
        this.backImgWidth=230
        this.backImgHeight=250;
        this.logoContTop=250;      
        this.xPosImg=300;
        this.yPosImg=50;
        
      }else if (height<=180 && height>80){
        this.moveOnLoadTop=65;
        this.logoWidth=30; 
        this.backImgWidth=230
        this.backImgHeight=590;
        this.logoContTop=600;      
        this.xPosImg=300;
        this.yPosImg=50;
        //
      }else if (height<=80 ){
        //
      }
      
    }
    //
    else if (width<=380 && width>280){
      if(height>880){
        this.moveOnLoadTop=7
        this.scheduleWidth="85%"
        this.backImgWidth=290
        this.logoWidth=30; 
        this.xPosImg=370;
        this.yPosImg=50;

      }
      else if (height<=880 && height>780){
        this.moveOnLoadTop=7
        this.scheduleWidth="85%"
        this.backImgWidth=290
        this.logoWidth=30; 
        this.xPosImg=370;
        this.yPosImg=50;

      }else if (height<=780 && height>680){
        this.moveOnLoadTop=7;
        this.scheduleWidth="85%";
        this.backImgWidth=290;
        this.backImgHeight=70
        this.logoContTop=80

        this.logoWidth=40; 
        this.xPosImg=370;
        this.yPosImg=50;
        
      }else if (height<=680 && height>580){
        this.moveOnLoadTop=10;
        this.scheduleWidth="85%";
        this.backImgWidth=290;
        this.backImgHeight=85
        this.logoContTop=90
        this.logoWidth=40; 
        this.xPosImg=370;
        this.yPosImg=50;
        
      }else if (height<=580 && height>480){
        this.moveOnLoadTop=14;
        this.scheduleWidth="85%";
        this.backImgWidth=290;
        this.backImgHeight=105
        this.logoContTop=115
        this.logoWidth=40; 
        this.xPosImg=370;
        this.yPosImg=50;
        
      }else if (height<=480 && height>380){
        this.moveOnLoadTop=18;
        this.scheduleWidth="85%";
        this.backImgWidth=290;
        this.backImgHeight=135
        this.logoContTop=145
        this.logoWidth=40; 
        this.xPosImg=370;
        this.yPosImg=50;
        
      }else if (height<=380 && height>280){
        this.moveOnLoadTop=22;
        this.scheduleWidth="85%";
        this.backImgWidth=290;
        this.backImgHeight=170
        this.logoContTop=180
        this.logoWidth=40; 
        this.xPosImg=370;
        this.yPosImg=50;
      }else if (height<=280 && height>180){
        this.moveOnLoadTop=26;
        this.scheduleWidth="85%";
        this.backImgWidth=290;
        this.backImgHeight=250
        this.logoContTop=270
        this.logoWidth=40; 
        this.xPosImg=370;
        this.yPosImg=50;
        
      }else if (height<=180 && height>80){
        this.moveOnLoadTop=55;
        this.scheduleWidth="85%";
        this.backImgWidth=290;
        this.backImgHeight=570
        this.logoContTop=590
        this.logoWidth=40; 
        this.xPosImg=370;
        this.yPosImg=50;
        
      }else if (height<=80 ){
        
      }
      
    }
    //
    else if (width<=280 && width>180){
      if(height>880){
        this.logoWidth=20;
        this.scheduleHeadingFontSize=1.3
        this.scheduleTimeFontSize=0.8
        this.scheduleFontSize=1
        this.scheduleLeft=-30;
        this.backImgWidth=600;
        this.scheduleWidth="100%";
        this.moveOnLoadTop=11;
        this.backImgHeight=75
        this.logoWidth=30
        this.logoFont=2.3     
        this.xPosImg=550   
        this.yPosImg=50

      }
      else if (height<=880 && height>780){
        this.logoWidth=20;
        this.scheduleHeadingFontSize=1.3
        this.scheduleTimeFontSize=0.8
        this.scheduleFontSize=1
        this.scheduleLeft=-30;
        this.backImgWidth=600;
        this.scheduleWidth="100%";
        this.moveOnLoadTop=11;
        this.backImgHeight=75
        this.logoWidth=30
        this.logoFont=2.3     
        this.xPosImg=550   
        this.yPosImg=50

      }else if (height<=780 && height>680){
        this.logoWidth=20;
        this.scheduleHeadingFontSize=1.3
        this.scheduleTimeFontSize=0.8
        this.scheduleFontSize=1
        this.scheduleLeft=-30;
        this.backImgWidth=600;
        this.scheduleWidth="100%";
        this.moveOnLoadTop=11;
        this.backImgHeight=75
        this.logoWidth=30
        this.logoFont=2.3     
        this.xPosImg=550   
        this.yPosImg=50
        
      }else if (height<=680 && height>580){
        this.logoWidth=20;
        this.scheduleHeadingFontSize=1.3
        this.scheduleTimeFontSize=0.8
        this.scheduleFontSize=1
        this.scheduleLeft=-30;
        this.backImgWidth=600;
        this.scheduleWidth="100%";
        this.moveOnLoadTop=11;
        this.backImgHeight=85
        this.logoContTop=95
        this.logoWidth=30
        this.logoFont=2.3     
        this.xPosImg=550   
        this.yPosImg=50
        
      }else if (height<=580 && height>480){
        this.logoWidth=20;
        this.scheduleHeadingFontSize=1.3
        this.scheduleTimeFontSize=0.8
        this.scheduleFontSize=1
        this.scheduleLeft=-30;
        this.backImgWidth=600;
        this.scheduleWidth="100%";
        this.moveOnLoadTop=11;
        this.backImgHeight=105
        this.logoContTop=110
        this.logoWidth=30
        this.logoFont=2.3     
        this.xPosImg=550   
        this.yPosImg=50
        
      }else if (height<=480 && height>380){
        this.logoWidth=22;
        this.scheduleHeadingFontSize=1.3
        this.scheduleTimeFontSize=0.8
        this.scheduleFontSize=1
        this.scheduleLeft=-30;
        this.backImgWidth=600;
        this.scheduleWidth="100%";
        this.moveOnLoadTop=11;
        this.backImgHeight=125
        this.logoContTop=130
        this.logoWidth=30
        this.logoFont=2.3     
        this.xPosImg=550   
        this.yPosImg=50
        
      }else if (height<=380 && height>280){
        this.logoWidth=20;
        this.scheduleHeadingFontSize=1.3
        this.scheduleTimeFontSize=0.8
        this.scheduleFontSize=1
        this.scheduleLeft=-30;
        this.backImgWidth=600;
        this.scheduleWidth="100%";
        this.moveOnLoadTop=13;
        this.backImgHeight=160
        this.logoContTop=170
        this.logoWidth=30
        this.logoFont=2.3     
        this.xPosImg=550   
        this.yPosImg=50
        
      }else if (height<=280 && height>180){
        this.logoWidth=20;
        this.scheduleHeadingFontSize=1.3
        this.scheduleTimeFontSize=0.8
        this.scheduleFontSize=1
        this.scheduleLeft=-30;
        this.backImgWidth=600;
        this.scheduleWidth="100%";
        this.moveOnLoadTop=26;
        this.backImgHeight=280
        this.logoContTop=290
        this.logoWidth=30
        this.logoFont=2.3     
        this.xPosImg=550   
        this.yPosImg=50
        
      }else if (height<=180 && height>80){
        this.logoWidth=20;
        this.scheduleHeadingFontSize=1.3
        this.scheduleTimeFontSize=0.8
        this.scheduleFontSize=1
        this.scheduleLeft=-30;
        this.backImgWidth=600;
        this.scheduleWidth="100%";
        this.moveOnLoadTop=70;
        this.backImgHeight=600
        this.logoContTop=610
        this.logoWidth=30
        this.logoFont=2.3     
        this.xPosImg=550   
        this.yPosImg=50
        
      }else if (height<=80 ){
        
      }
      
    }
    //
    else if (width<=180 && width>80){
      if(height>880){

      }
      else if (height<=880 && height>780){

      }else if (height<=780 && height>680){
        
      }else if (height<=680 && height>580){
        
      }else if (height<=580 && height>480){
        
      }else if (height<=480 && height>380){
        
      }else if (height<=380 && height>280){
        
      }else if (height<=280 && height>180){
        
      }else if (height<=180 && height>80){
        
      }else if (height<=80 ){
        
      }
      
    }
    //
    else if (width<=80 ){
      if(height>880){

      }
      else if (height<=880 && height>780){

      }else if (height<=780 && height>680){
        
      }else if (height<=680 && height>580){
        
      }else if (height<=580 && height>480){
        
      }else if (height<=480 && height>380){
        
      }else if (height<=380 && height>280){
        
      }else if (height<=280 && height>180){
        
      }else if (height<=180 && height>80){
        
      }else if (height<=80 ){
        
      }
      
    }
    
  }
  

}
