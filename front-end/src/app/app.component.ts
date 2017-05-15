import { Component, OnInit } from '@angular/core';

import { UserService } from './user.service';
import { AuthenticationService } from './authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private title;
  private user;

  constructor(private authenticationService: AuthenticationService) {
    this.title = 'My University';
  }

  ngOnInit() {
    this.user = this.authenticationService.getCurrentUser();
  }
}
