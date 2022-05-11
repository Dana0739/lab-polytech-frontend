export class Authorization {
  isAuthorized = false;
  bearerToken = '';
  expireMinutes = 0;
  startTime;

  constructor(isAuthorized: boolean, bearerToken: string, expireMinutes: number, startTime: any = new Date()) {
    this.isAuthorized = isAuthorized;
    this.bearerToken = bearerToken;
    this.expireMinutes = expireMinutes;
    this.startTime = startTime;
  }
}
