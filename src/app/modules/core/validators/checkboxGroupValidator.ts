import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn } from "@angular/forms";

export function checkboxGroupValidator(minRequired=1): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        let checked = 0;
        const formGroup = control as FormGroup;
        Object.keys(formGroup.controls).forEach(key => {
            const control = formGroup.controls[key];
            if(control.value === true) {
                checked ++;
            }
        });

        if(checked < minRequired) {
            return {hasError: true}
        }

        return null;
    }
}