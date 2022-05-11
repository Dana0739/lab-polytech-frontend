import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Employee} from '../model/Employee';
import {EmployeesService} from '../service/employees.service';

@Component({
  selector: 'app-create-employee-form',
  templateUrl: './create-employee-form.component.html'
})
export class CreateEmployeeFormComponent implements OnInit {

  constructor(private employeesService: EmployeesService) {
  }

  @Input()
  isAuthorized: boolean;

  newEmployee: Employee;
  isShownImg: boolean;
  imgStatus: number;
  @Output() onSuccess = new EventEmitter<any>();

  ngOnInit(): void {
    this.imgStatus = 200;
    this.isShownImg = false;
    this.newEmployee = new Employee();
  }

  create() {
    this.employeesService.createEmployee(this.newEmployee).subscribe(
      res => {
        console.log(res);
        this.imgStatus = 200;
        this.isShownImg = false;
        this.onSuccess.emit(res);
      },
      error => {
        console.log(error);
        this.imgStatus = error.status;
        this.isShownImg = true;
      });
  }
}
