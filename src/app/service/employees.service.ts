import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Employee} from '../model/Employee';
import {FilterArguments} from '../model/FilterArguments';
import {AuthorizationService} from './authorization.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  private url = environment.url + '/employees';

  constructor(private http: HttpClient,
              private authorizationService: AuthorizationService) { }

  getEmployees(): Observable<Employee[]> {
    const headers = new HttpHeaders()
      .set('Access-Control-Allow-Origin', '*')
      .set('Content-Type', 'application/json;charset=utf-8');
    return this.http.get<Employee[]>(this.url, {headers});
  }

  createEmployee(employee: Employee): Observable<Employee> {
    const headers = new HttpHeaders()
      .set('Authorization', 'Bearer ' + this.authorizationService.authorization.bearerToken)
      .set('Access-Control-Allow-Origin', '*')
      .set('Content-Type', 'application/json;charset=utf-8');
    return this.http.post<Employee>(this.url, employee, {headers});
  }

  filterEmployees(filterArgs: FilterArguments): Observable<Employee[]> {
    const headers = new HttpHeaders()
      .set('Access-Control-Allow-Origin', '*')
      .set('Content-Type', 'application/json;charset=utf-8');
    return this.http.get<Employee[]>(this.makeUrlWithArgs(filterArgs), {headers});
  }

  private makeUrlWithArgs(filterArgs: FilterArguments): string {
    let res = this.url + '?';
    if (filterArgs.name) {
      res += 'name=' + filterArgs.name + '&';
    }
    if (filterArgs.surname) {
      res += 'surname=' + filterArgs.surname + '&';
    }
    if (filterArgs.isSorted) {
      res += 'sorted=' + filterArgs.isSorted + '&';
      res += 'order=' + (filterArgs.orderAsc ? 'ASC' : 'DESC') + '&';
    }
    if (filterArgs.pageNumber || filterArgs.pageNumber === 0) {
      res += 'page=' + filterArgs.pageNumber;
    }
    if (res.endsWith('&')) {
      res = res.slice(0, -1);
    }
    return res;
  }
}
