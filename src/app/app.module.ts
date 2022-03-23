import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AuthorizationComponent } from './authorization/authorization.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeesTableComponent } from './employees-table/employees-table.component';
import { HeaderComponent } from './header/header.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AuthorizationComponent,
    EmployeeComponent,
    EmployeesTableComponent,
    HeaderComponent
  ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
