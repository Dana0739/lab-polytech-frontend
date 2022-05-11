import {Component, Input} from '@angular/core';
import {AuthorizationService} from '../service/authorization.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  constructor(private authorizationService: AuthorizationService) { }

  @Input()
  isAuthorized: boolean;

  @Input()
  isEditPage: boolean;

  logOut() {
    this.authorizationService.unAuthorize();
  }
}
