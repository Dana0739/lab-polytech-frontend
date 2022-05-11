import {Component, Input, OnInit} from '@angular/core';
import {Employee} from '../model/Employee';

@Component({
  selector: 'app-create-employee-form',
  templateUrl: './create-employee-form.component.html'
})
export class CreateEmployeeFormComponent implements OnInit {

  constructor() { }

  @Input()
  isAuthorized: boolean;

  newEmployee: Employee;
  isShownImg: boolean;
  imgStatus: number;

  ngOnInit(): void {
    this.imgStatus = 200;
    this.isShownImg = false;
    this.newEmployee = new Employee();
  }

  create() {
  }
}
