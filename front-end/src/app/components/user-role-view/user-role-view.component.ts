import { Component, OnInit } from '@angular/core';
import { MdCheckboxModule } from '@angular/material';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
	selector: 'app-user-role-view',
	templateUrl: './user-role-view.component.html',
	styleUrls: ['./user-role-view.component.scss']
})
export class UserRoleViewComponent implements OnInit {

	constructor() { }

	onSubmit(userRoleView) {
		console.log(userRoleView.userRoleCreate)
	}

	ngOnInit() {
	}

}