import { Component } from '@angular/core';
import {AuthorizationService} from './service/authorization.service';
import {Authorization} from './Authorization';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  authorization: Authorization;

  constructor(private authorizationService: AuthorizationService) {
    this.authorization = this.authorizationService.authorization;
  }
}
