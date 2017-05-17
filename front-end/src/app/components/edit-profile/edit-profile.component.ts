import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../models';
import { UserService, AuthenticationService } from '../../services';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {

  private user: User;

  constructor(private route: ActivatedRoute, private authenticationService: AuthenticationService, private userService: UserService) {
    this.user = new User();
  }

  onSave() {
    this.userService.update([this.user]).subscribe(result => {
    });
  }

  ngOnInit() {

    this.route.queryParams.subscribe(params => {
      const otherUserId = params['otherUserId'] || '0';

      if (otherUserId !== '0') {
        this.userService.read('id', [otherUserId]).subscribe(response => {
          this.user = <User>response['data'][0];
        });
      } else {
        this.user = <User>this.authenticationService.getCurrentUser();
      }
    });
  }
}
