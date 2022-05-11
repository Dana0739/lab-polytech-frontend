export class Authorization {
  isAuthorized = false;
  bearerToken = '';
  expireDate = 0;

  constructor(isAuthorized: boolean, bearerToken: string, expireDate: number) {
    this.isAuthorized = isAuthorized;
    this.bearerToken = bearerToken;
    this.expireDate = expireDate;
  }
}
