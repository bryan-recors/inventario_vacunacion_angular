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
}