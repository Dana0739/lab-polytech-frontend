export class Authorization {
  isAuthorized = false;
  bearerToken = '';

  constructor(isAuthorized: boolean, bearerToken: string) {
    this.isAuthorized = isAuthorized;
    this.bearerToken = bearerToken;
  }
}
