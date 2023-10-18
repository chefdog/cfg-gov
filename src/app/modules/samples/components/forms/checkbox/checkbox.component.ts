import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { checkboxGroupValidator } from '@core/index';

@Component({
  selector: 'cfg-checkbox',
  templateUrl: './checkbox.component.html',
  styles: [
  ]
})
export class CheckboxComponent implements OnInit {
  form: FormGroup;

  sports: Array<string> = ['tennis', 'hockey', 'voetbal', 'martial arts'];
  allSportsChecked: boolean;
  
  get sportsGroup() : FormGroup {
    return this.form.controls['sportsGroup'] as FormGroup;
  }

  constructor() {
    this.form = new FormGroup({});
    this.allSportsChecked = false;
  }
  
  ngOnInit(): void {

    this.form.addControl('sportsGroup', new FormGroup({}, checkboxGroupValidator()));
    this.sports.forEach((s: string) => {      
      this.sportsGroup.addControl(s, new FormControl(false));
    });
  }

  onSubmit(): void {    
    if(this.form.valid) {
      console.log(this.form.controls);  
    }
    
  }

  onSelectAll(event$: Event): void {
    this.allSportsChecked = !this.allSportsChecked;
    const sportsGroup = this.form.get('sportsGroup') as FormGroup;
    for(var key in sportsGroup.controls) {
      sportsGroup.controls[key].patchValue(this.allSportsChecked);
    }
  }

  
}
