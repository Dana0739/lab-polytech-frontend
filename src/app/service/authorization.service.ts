import { Injectable } from '@angular/core';
import {CookieService} from './cookie.service';
import {Authorization} from '../Authorization';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
  private authorization: Authorization;
  private COOKIE_AUTHORIZATION = 'COOKIE_AUTHORIZATION';

  constructor(private cookieService: CookieService) {
    this.authorization = this.getAuthorization();
  }

  getAuthorization(): Authorization {
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

  setAuthorization(isAuthorized: string, bearerToken: string, expireDays: number) {
    this.cookieService.setCookie(this.COOKIE_AUTHORIZATION, `${isAuthorized}; ${bearerToken}`, expireDays);
  }

  deleteAuthorization() {
    this.cookieService.deleteCookie(this.COOKIE_AUTHORIZATION);
  }
}
