import { AbstractControl, ValidatorFn } from "../../node_modules/@angular/forms";





export function forbiddenNameValidators(forbiddenName:RegExp):ValidatorFn{

    return (control:AbstractControl):{[key:string]:any} | null =>{
        const forbidden = /admin/.test(control.value);
        return forbidden ? {"forbiddenName":{value:control.value}} : null;
    }
}