import { AbstractControl } from "@angular/forms";
import { ValidationErrors } from "@angular/forms";
import { ValidatorFn } from "@angular/forms";

export function emailValidation(dot:string, symbol:RegExp, domain:Array<string>): ValidatorFn{
    return (control: AbstractControl): ValidationErrors | null => {
        // find at what position is our dot for domain
        let dotIndex;
        control.value.lastIndexOf(".")?     dotIndex=control.value.lastIndexOf("."):0;
        // split mail to two string by the dotIndex
        const nameSymbolMail = control.value.trim().substring(0,dotIndex).split("@");
        // some logic..

        let emptyNameOrEmailName:boolean=true;
        let existingDomain:boolean = false;
       if(nameSymbolMail[0]==="" || nameSymbolMail[1]===""){
           emptyNameOrEmailName=true;
       }
       else {
           emptyNameOrEmailName=false;
       }   
       
          
        
        const currentDomain = control.value.substring(dotIndex,control.value.length)
        const prohibitedSymbol =symbol.test(control.value);     

        domain.forEach(e=> {
            if(e==currentDomain){
                existingDomain=true;
            }
        })                
        return (prohibitedSymbol   && !emptyNameOrEmailName && existingDomain )? null : {emailError: {value: control.value}}
    }



}

export function timeValidation(time:Array<string>):ValidatorFn{
    return(control: AbstractControl):ValidationErrors | null => {
        let linearSearch:boolean= false;
        time.forEach(el=> {
            if(el==control.value){
                linearSearch=true;
            }
        })
        return linearSearch? null: {timeError: {value:control.value}}
    }
}
export function dateValidation():ValidatorFn{
    return (control: AbstractControl):ValidationErrors | null => {     
        let today= new Date();
        let currentDate =new Date(today.getFullYear(), today.getMonth(), today.getDate(), 0, 0, 0);
       let newDate = new Date(control.value)
       let validDate:boolean=false      
       if(newDate>=currentDate){
           
        if(newDate.getFullYear()-currentDate.getFullYear()==1){
            
               let monthsToYearEnd =  12-currentDate.getMonth();
               let monthsFromYearStarts = newDate.getMonth();
               if(monthsToYearEnd+monthsFromYearStarts>=0 &&  monthsToYearEnd+monthsFromYearStarts<6){
                
               }
               else if (monthsToYearEnd+monthsFromYearStarts==6){
                   if(newDate.getDate()<=currentDate.getDate()){
                    validDate= true;
                   }

               }
        }
        else if (newDate.getFullYear()-currentDate.getFullYear()==0){            
            console.log(newDate.getMonth()-currentDate.getMonth())
            if(newDate.getMonth()-currentDate.getMonth()>=0 && newDate.getMonth()-currentDate.getMonth()<6){
                validDate=true;
            }
            else if (newDate.getMonth()-currentDate.getMonth()===6){
                if(newDate.getDate()<=currentDate.getDate()){
                    validDate=true;
                }
            }
        }
       }
        return validDate? null:{dateError: {value: control.value}};
    }
}

export function totalPeopleNum(num:Array<any>):ValidatorFn{
    return (control: AbstractControl):ValidationErrors | null => {
        let linearSearch:boolean = false;
        num.forEach(e=>{
            if(e==control.value){
                linearSearch=true;
            }
        })
        return linearSearch ? null: {totalNumError: {value:control.value}};
    }
}