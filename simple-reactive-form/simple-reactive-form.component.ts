import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-simple-reactive-form',
  templateUrl: './simple-reactive-form.component.html',
  styleUrls: ['./simple-reactive-form.component.css']
})
export class SimpleReactiveFormComponent implements OnInit {
  employeeForm:FormGroup;
  constructor() { }

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
