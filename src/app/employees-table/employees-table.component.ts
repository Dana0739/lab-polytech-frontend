import {Component, Input, OnInit} from '@angular/core';
import {Employee} from '../model/Employee';
import {EmployeesService} from '../service/employees.service';
import {Authorization} from '../Authorization';
import {AuthorizationService} from '../service/authorization.service';

@Component({
  selector: 'app-employees-table',
  templateUrl: './employees-table.component.html'
})
export class EmployeesTableComponent implements OnInit {
  authorization: Authorization;

  constructor(private employeesService: EmployeesService,
              private authorizationService: AuthorizationService) {
  }

  @Input()
  employees: Employee[];
  displayedColumns: string[] = [
    'id',
    'name',
    'surname',
    'position',
    'date_of_birth',
    'salary',
  ];

  ngOnInit() {
    this.authorization = this.authorizationService.authorization;
    this.employeesService.getEmployees().subscribe((employees) => {
      this.employees = employees;
    });
  }

  setEmployees(res: Employee[]): void {
    this.employees = res;
  }

  salaryView(salary: number): string {
    let res = '$ ' + salary.toString().split('').reverse()
      .map((val, id) => (id % 3 === 0) ? val + ',' : val)
      .reverse().join('').slice(0, -1);
    res = res.split('.')[0]
      + (res.split('.')[1] !== undefined
        ? '.' + this.replaceAll(res.split('.')[1], ',', '')
        : '');
    return res;
  }

  replaceAll(str: string, find: string, replace: string): string {
    return str.replace(new RegExp(find, 'g'), replace);
  }
}
