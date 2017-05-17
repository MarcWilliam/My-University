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
  private isNew: boolean;

  constructor(private route: ActivatedRoute, private authenticationService: AuthenticationService, private userService: UserService) {
    this.user = new User();
  }

  onSave(model: User) {
    if (this.isNew) {
      this.userService.create([this.user]).subscribe(result => {
      });
    } else {
      this.userService.update([this.user]).subscribe(result => {
      });
    }
  }

  ngOnInit() {

    this.route.queryParams.subscribe(params => {
      const otherUserId = params['otherUserId'];
      this.isNew = otherUserId == '0';

      const isOther: boolean = otherUserId != null && otherUserId != '0';
      if (isOther) {
        this.userService.read('id', [otherUserId]).subscribe(response => {
          this.user = <User>response['data'][0];
        });
      } else if (!isOther && !this.isNew) {
        this.user = <User>this.authenticationService.getCurrentUser();
      }
    });
  }
}
