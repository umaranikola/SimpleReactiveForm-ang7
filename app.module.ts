import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { ListEmployeesComponent } from './employees/list-employees.component';
import { AddressDataComponent } from './address-data/address-data.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { StudentsModule } from './students/students.module';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeService } from './employee.service';
import { CreateEmpoyeeComponent } from './create-empoyee/create-empoyee.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { SimpleReactiveFormComponent } from './simple-reactive-form/simple-reactive-form.component';

@NgModule({
  declarations: [ //goes all your components  (e.g., AppComponent, TodoComponent)
    AppComponent,
    TestComponent,
    ListEmployeesComponent,
    AddressDataComponent,
    EmployeeDetailsComponent,
    CreateEmpoyeeComponent,
    ReactiveformComponent,
    SimpleReactiveFormComponent,
   
  ],
  imports: [ // Imports: routes and modules go here.
    BrowserModule ,
    FormsModule,
    StudentsModule,
    ReactiveFormsModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent] // Bootstrap: list the components you want to load when the app starts. In our case is AppComponent
})
export class AppModule { }
