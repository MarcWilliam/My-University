import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit() {
  }

    onLogOutTapped(): any {
    this.authenticationService.signOut();
  }

}
