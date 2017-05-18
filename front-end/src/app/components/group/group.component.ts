import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from '../../services';

@Component({
	selector: 'app-group',
	templateUrl: './group.component.html',
	styleUrls: ['./group.component.scss']
})
export class GroupComponent implements OnInit {

	constructor(private authenticationService: AuthenticationService) { }

	ngOnInit() {
	}

	onLogOutTapped(): any {
		this.authenticationService.signOut();
	}

}
