import {Component, Input, OnInit} from '@angular/core';
import {Employee} from '../model/Employee';
import {EmployeesService} from '../service/employees.service';

@Component({
  selector: 'app-employees-table',
  templateUrl: './employees-table.component.html',
  styleUrls: ['./employees-table.component.css']
})
export class EmployeesTableComponent implements OnInit {

  constructor(private employeesService: EmployeesService) { }

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
    this.employeesService.getEmployees().subscribe((employees) => {
      this.employees = employees;
    });
  }

  setEmployees(res: Employee[]): void {
    this.employees = res;
  }
}
