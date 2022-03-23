import {Component} from '@angular/core';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css']
})
export class AuthorizationComponent {

  constructor() {
    this.model = new User();
  }

  model: User;

  register() {
    console.log('register');
  }

  logIn() {
    console.log('logIn');
  }
}

class User {
  name = '';
  password = '';
}
