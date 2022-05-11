import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FilterArguments} from '../model/FilterArguments';
import {EmployeesService} from '../service/employees.service';

@Component({
  selector: 'app-filter-sort-form',
  templateUrl: './filter-sort-form.component.html',
  styleUrls: ['./filter-sort-form.component.css']
})
export class FilterSortFormComponent implements OnInit {

  constructor(private employeesService: EmployeesService) {
  }

  filterArguments: FilterArguments;
  errorMessage: string;
  isShownImg: boolean;
  imgStatus: number;

  @Output() onEmployeesSearched = new EventEmitter<any>();

  ngOnInit(): void {
    this.errorMessage = '';
    this.filterArguments = new FilterArguments();
    this.imgStatus = 200;
    this.isShownImg = false;
  }

  find(): void {
    console.log('find filter sort employees');
    this.employeesService.filterEmployees(this.filterArguments).subscribe(
      res => {
          console.log(res);
          this.imgStatus = 200;
          this.isShownImg = false;
          this.onEmployeesSearched.emit(res);
        },
        error => {
          console.log(error);
          this.imgStatus = error.status;
          this.isShownImg = true;
        });
  }
}
