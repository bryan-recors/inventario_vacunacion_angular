import { AbstractControl } from "@angular/forms";

export class MyValidators{
    static validacionCedula(control:AbstractControl){
        const value = control.value; //obtener el valor
        //console.log(value);
        if(value.length != 10 ){
            return {ci_invalid: true};
        }
        return null;
    }

    static validacionTipoVacuna(control:AbstractControl){
        const value = control.value; //obtener el valor
        //console.log(value);
        if((value === "Pfizer") || (value === "AztraZeneca") || (value === "Sinovac") 
            || (value === "Sputnik") || (value === "Jhonson&Jhonson")|| (value === "")){
            return {tipov_invalid: true};
        }
        return null;
    }
}

