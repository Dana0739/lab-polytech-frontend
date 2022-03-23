import { Injectable } from '@angular/core';
import {CookieService} from './cookie.service';
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
  private COOKIE_AUTHORIZATION = 'COOKIE_AUTHORIZATION';
  private url = environment.url + '/auth';

  constructor(private cookieService: CookieService,
              private http: HttpClient) {
    this.authorization = this.getAuthorization();
  }


  private getAuthorization(): Authorization {
    const result = new Authorization(false, '');
    const cookie = this.cookieService.getCookie(this.COOKIE_AUTHORIZATION);
    if (cookie !== '') {
      const tmp = cookie.split(';');
      result.isAuthorized = tmp && tmp[0].toLowerCase() === 'true';
      console.log(result);
      result.bearerToken = tmp.length > 1 ? tmp[1] : '';
      console.log(result);
    }
    return result;
  }

  private setAuthorization(isAuthorized: boolean, bearerToken: string, expireDays: number) {
    this.cookieService.setCookie(this.COOKIE_AUTHORIZATION, `${isAuthorized}; ${bearerToken}`, expireDays);
  }

  private deleteAuthorization() {
    this.cookieService.deleteCookie(this.COOKIE_AUTHORIZATION);
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
  }

  unAuthorize() {
    this.deleteAuthorization();
    this.authorization.isAuthorized = false;
    this.authorization.bearerToken = '';
  }
}
