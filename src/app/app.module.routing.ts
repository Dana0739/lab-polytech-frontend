import {EmployeesTableComponent} from './employees-table/employees-table.component';
import {RouterModule, Routes} from '@angular/router';
import {AuthorizationComponent} from './authorization/authorization.component';
import {NgModule} from '@angular/core';

const routes: Routes = [
  {path: 'employees', component: EmployeesTableComponent},
  {path: 'auth', component: AuthorizationComponent},
  {path: '**', redirectTo: '/employees'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppModuleRouting {
}
