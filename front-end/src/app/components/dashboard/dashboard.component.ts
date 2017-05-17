import { Component, OnInit } from '@angular/core';

import { ServiceFactory, AuthenticationService, UserService } from '../../services';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private serviceFactory: ServiceFactory, private authenticationService: AuthenticationService, private userService: UserService) { }

  ngOnInit() {
  }

  onLogOutTapped(): any {
    this.authenticationService.signOut();
  }

  onTest(): any {
    this.userService.read('7').subscribe((user) => { console.log(user) });
  }

}
