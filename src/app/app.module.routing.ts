import {EmployeesTableComponent} from './employees-table/employees-table.component';
import {RouterModule, Routes} from '@angular/router';
import {AuthorizationComponent} from './authorization/authorization.component';
import {NgModule} from '@angular/core';
import {EditEmployeeFormComponent} from './edit-employee-form/edit-employee-form.component';

const routes: Routes = [
  {path: 'employees',
    children: [{
      path: ':id',
      component: EditEmployeeFormComponent
    },
      {
        path: '',
        component: EmployeesTableComponent
      }]},
  {path: 'auth', component: AuthorizationComponent},
  {path: '**', redirectTo: '/employees'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppModuleRouting {
}
