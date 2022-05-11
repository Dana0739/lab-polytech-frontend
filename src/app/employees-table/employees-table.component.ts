import {Component, Input, OnInit} from '@angular/core';
import {Employee} from '../model/Employee';
import {EmployeesService} from '../service/employees.service';
import {Authorization} from '../model/Authorization';
import {AuthorizationService} from '../service/authorization.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-employees-table',
  templateUrl: './employees-table.component.html'
})
export class EmployeesTableComponent implements OnInit {
  authorization: Authorization;

  constructor(private employeesService: EmployeesService,
              private authorizationService: AuthorizationService,
              private router: Router) {
  }

  @Input()
  employees: Employee[];
  displayedColumns: string[] = [
    'id',
    'name',
    'surname',
    'position',
    'date_of_birth',
    'age',
    'salary',
    'actions',
  ];

  ngOnInit() {
    this.authorization = this.authorizationService.authorization;
    this.employeesService.getEmployees().subscribe((employees) => {
      this.employees = employees;
    });
    if (this.authorization.isAuthorized) {
      setInterval(() => {
        this.authorizationService.unAuthorize();
        this.reload();
      }, 300000);
    }
  }

  setEmployees(res: Employee[]): void {
    this.employees = res;
  }

  reload() {
    window.location.reload();
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

  // tslint:disable-next-line:variable-name
  ageView(date_of_birth: string): number {
    const birthday: any = new Date(date_of_birth);
    const ageDifMs = Date.now() - birthday;
    const ageDate = new Date(ageDifMs); // milliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  replaceAll(str: string, find: string, replace: string): string {
    return str.replace(new RegExp(find, 'g'), replace);
  }

  edit(employee: Employee) {
    console.log('Edit employee');
    console.log(employee);
    this.router.navigate(['./employees', employee.id,
      { name: employee.name,
        surname: employee.surname,
        position: employee.position,
        date_of_birth: employee.date_of_birth,
        salary: employee.salary}]);
  }

  delete(employee: Employee) {
    console.log('Delete employee');
    console.log(employee);
    if (confirm(`Are you sure you want to delete employee: ${employee.name} ${employee.surname} (id: ${employee.id})?`)) {
      this.employeesService.deleteEmployee(employee.id).subscribe(
        res => {
          console.log(res);
          this.reload();
        },
        error => {
          console.log(error);
        });
    }
  }
}
