import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {AuthorizationComponent} from './authorization/authorization.component';
import {EmployeesTableComponent} from './employees-table/employees-table.component';
import {HeaderComponent} from './header/header.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSelectModule} from '@angular/material/select';
import {MatPaginatorModule} from '@angular/material/paginator';
import { FilterSortFormComponent } from './filter-sort-form/filter-sort-form.component';
import {AppModuleRouting} from './app.module.routing';
import { CreateEmployeeFormComponent } from './create-employee-form/create-employee-form.component';
import { EditEmployeeFormComponent } from './edit-employee-form/edit-employee-form.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthorizationComponent,
    EmployeesTableComponent,
    HeaderComponent,
    FilterSortFormComponent,
    CreateEmployeeFormComponent,
    EditEmployeeFormComponent
  ],
  imports: [
    RouterModule,
    AppModuleRouting,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatTableModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDialogModule,
    MatInputModule,
    MatCheckboxModule,
    MatSelectModule,
    MatPaginatorModule,
    //     OverlayModule,
  ],
  providers: [
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: true}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
