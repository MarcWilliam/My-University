import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-role-edit',
  templateUrl: './user-role-edit.component.html',
  styleUrls: ['./user-role-edit.component.scss']
})
export class UserRoleEditComponent implements OnInit {

 userRole = [
 {
      Name : 'Student',
      Create : true,
      Read : true,
      Delete : true,
      Update : true,
      CreateOthers : true,
      ReadOthers : true,
      DeleteOthers : true,
      UpdateOthers : true},

{

      Name : 'ta',
      Create : true,
      Read : true,
      Delete : true,
      Update : true,
      CreateOthers : true,
      ReadOthers : true,
      DeleteOthers : true,
      UpdateOthers : true,
      

    }

 ];


  constructor() { }

  ngOnInit() {
  }

}
 