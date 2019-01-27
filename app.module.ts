import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { SimpleReactiveFormComponent } from './simple-reactive-form/simple-reactive-form.component';

@NgModule({
  declarations: [ //goes all your components  (e.g., AppComponent, TodoComponent)
    AppComponent,
    ReactiveformComponent,
    SimpleReactiveFormComponent,
   
  ],
  imports: [ // Imports: routes and modules go here.
    BrowserModule ,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent] // Bootstrap: list the components you want to load when the app starts. In our case is AppComponent
})
export class AppModule { }
