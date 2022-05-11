import {Component} from '@angular/core';
import {AuthorizationService} from '../service/authorization.service';
import {User} from '../model/User';
import {Router} from '@angular/router';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css']
})
export class AuthorizationComponent {

  constructor(private authorizationService: AuthorizationService,
              private router: Router) {
    this.user = new User();
    this.ImgStatus = 400;
    this.isShownImg = false;
  }

  user: User;
  isShownImg: boolean;
  ImgStatus: number;

  register() {
    console.log('register');
    this.authorizationService.register(this.user)
      .subscribe(res => {
          console.log(res);
          this.ImgStatus = 200;
          this.isShownImg = true;
          this.logIn();
        },
        error => {
          console.log(error);
          this.ImgStatus = error.status;
          this.isShownImg = true;
        });
  }

  logIn() {
    console.log('logIn');
    this.authorizationService.logIn(this.user)
      .subscribe(res => {
        console.log(res);
        this.ImgStatus = 200;
        this.isShownImg = true;
        this.authorizationService.authorize(res.token);
        this.router.navigate(['./employees']);
      }, error => {
        console.log(error);
        this.ImgStatus = error.status;
        this.isShownImg = true;
      });
  }
}
