import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserRole } from '../../models';
import { UserRoleService, AuthenticationService } from '../../services';

@Component({
  selector: 'app-user-role-edit',
  templateUrl: './user-role-edit.component.html',
  styleUrls: ['./user-role-edit.component.scss']
})
export class UserRoleEditComponent implements OnInit {

  private userRole: UserRole;
  private isNew: boolean;

  constructor(private route: ActivatedRoute, private authenticationService: AuthenticationService, private userRoleService: UserRoleService) {
    this.userRole = new UserRole();
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const userRoleId = params['userRoleId'];
      this.isNew = userRoleId == '0';

      if (!this.isNew) {
        this.userRoleService.read('id', [userRoleId]).subscribe(response => {
          this.userRole = <UserRole>response['data'][0];
          console.log(this.userRole.permissions);
        });
      } 
    });
  }
  onSave(){
    if(this.isNew){
    this.userRoleService.create([this.userRole]).subscribe(result => {
    });
  }else{
    this.userRoleService.update([this.userRole]).subscribe(result => {
    });
    console.log(this.userRole.permissions);
  }
  }
  }
 