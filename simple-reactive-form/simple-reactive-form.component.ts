import { Component, OnInit } from '@angular/core';
// Import FormGroup and FormControl classes
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-simple-reactive-form',
  templateUrl: './simple-reactive-form.component.html',
  styleUrls: ['./simple-reactive-form.component.css']
})
export class SimpleReactiveFormComponent implements OnInit {
   // This FormGroup contains fullName and Email form controls
  employeeForm:FormGroup;
  constructor() { }
  // Initialise the FormGroup with the 2 FormControls we need.
  // ngOnInit ensures the FormGroup and it's form controls are
  // created when the component is initialised
  ngOnInit() {
    this.employeeForm= new FormGroup({
      fullName: new FormControl(),
      email: new FormControl(),
    });
  }
  onSubmit() :void{
    console.log(this.employeeForm.value);
  }

}
