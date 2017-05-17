import { Component, OnInit } from '@angular/core';

import { UserService, AuthenticationService } from './services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private title;
  private user;

  constructor(private authenticationService: AuthenticationService, public userService: UserService) {
    this.title = 'My University';
  }

  ngOnInit() {
    this.user = this.authenticationService.getCurrentUser();
  }
  
}
