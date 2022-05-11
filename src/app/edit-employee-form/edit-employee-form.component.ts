import {Component, Input, OnInit} from '@angular/core';
import {EmployeesService} from '../service/employees.service';
import {Employee} from '../model/Employee';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-edit-employee-form',
  templateUrl: './edit-employee-form.component.html'
})
export class EditEmployeeFormComponent implements OnInit {

  constructor(private employeesService: EmployeesService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  @Input()
  isAuthorized: boolean;

  @Input()
  employee: Employee;

  isShownImg: boolean;
  imgStatus: number;

  ngOnInit(): void {
    this.imgStatus = 200;
    this.isShownImg = false;
    console.log(this.route.snapshot.paramMap);
    this.employee = new Employee();
    this.employee.name = this.route.snapshot.paramMap.get('name');
    this.employee.surname = this.route.snapshot.paramMap.get('surname');
    this.employee.position = this.route.snapshot.paramMap.get('position');
    this.employee.date_of_birth = this.route.snapshot.paramMap.get('date_of_birth').slice(0, 10);
    this.employee.salary = parseInt(this.route.snapshot.paramMap.get('salary'));
  }

  update() {
    this.employeesService.updateEmployee(this.employee).subscribe(
      res => {
        console.log(res);
        this.imgStatus = 200;
        this.isShownImg = false;
        this.router.navigate(['./employees']);
      },
      error => {
        console.log(error);
        this.imgStatus = error.status;
        this.isShownImg = true;
      });
  }
}
