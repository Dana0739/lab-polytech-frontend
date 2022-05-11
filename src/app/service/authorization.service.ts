import { Injectable } from '@angular/core';
import {Authorization} from '../Authorization';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {User} from '../model/User';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
  authorization: Authorization;
  private IS_AUTHORIZED = 'IS_AUTHORIZED';
  private BEARER_TOKEN = 'BEARER_TOKEN';
  private EXPIRE_DATE = 'EXPIRE_DATE';
  private url = environment.url + '/auth';

  constructor(private http: HttpClient) {
    this.authorization = this.getAuthorization();
  }

  private getAuthorization(): Authorization {
    const result = new Authorization(false, '', 0);
    let tmp = localStorage.getItem(this.IS_AUTHORIZED);
    result.isAuthorized = tmp && tmp.toLowerCase() === 'true';
    result.bearerToken = localStorage.getItem(this.BEARER_TOKEN);
    tmp = localStorage.getItem(this.EXPIRE_DATE);
    result.expireDate = tmp ? Number(tmp) : 0;
    return result;
  }

  private setAuthorization(isAuthorized: boolean, bearerToken: string, expireDays: number) {
    localStorage.setItem(this.IS_AUTHORIZED, isAuthorized.toString());
    localStorage.setItem(this.BEARER_TOKEN, bearerToken);
    localStorage.setItem(this.EXPIRE_DATE, expireDays.toString());
  }

  private deleteAuthorization() {
    localStorage.removeItem(this.IS_AUTHORIZED);
    localStorage.removeItem(this.BEARER_TOKEN);
    localStorage.removeItem(this.EXPIRE_DATE);
  }

  register(user: User): Observable<any> {
    const headers = new HttpHeaders()
      .set('Access-Control-Allow-Origin', '*')
      .set('Content-Type', 'application/json;charset=utf-8');
    return this.http.post<any>(`${this.url}/register`, user, {headers});
  }

  logIn(user: User): Observable<any> {
    const headers = new HttpHeaders()
      .set('Access-Control-Allow-Origin', '*')
      .set('Content-Type', 'application/json;charset=utf-8');
    return this.http.post<any>(`${this.url}/token`, user, {headers});
  }

  authorize(token: string) {
    this.setAuthorization(true, token, 1);
    this.authorization.isAuthorized = true;
    this.authorization.bearerToken = token;
    this.authorization.expireDate = 1;
  }

  unAuthorize() {
    this.deleteAuthorization();
    this.authorization.isAuthorized = false;
    this.authorization.bearerToken = '';
    this.authorization.expireDate = 0;
  }
}
