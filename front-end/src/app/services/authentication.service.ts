import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/map';
import { tokenNotExpired } from 'angular2-jwt';

import { User } from '../models';

import { UserService } from '../services';

import CONFIG from '../../app.config';

@Injectable()
export class AuthenticationService {
	constructor(private http: Http, private userService: UserService, private router: Router) { }

	public signUp(user: any): void {
		this.userService.register(user).subscribe(data => {
			if (data.user && data.token) {
				this.setCurrentUser(data);
				this.router.navigate(['/dashboard']);
			}
		});
	}

	signIn(credentials: any) {
		this.userService.login(credentials).subscribe(data => {
			if (data.user && data.token) {
				this.setCurrentUser(data);
				this.router.navigate(['/dashboard']);
			}
		});
	}

	signOut() {
		this.deleteCurrentUser();
	}

	public static IsLoggedIn() {
		return tokenNotExpired();
	}

	public isloggedIn() {
		return AuthenticationService.IsLoggedIn();
	}

	public getCurrentUser(): User {
		let user = localStorage.getItem('user');
		if (user) {
			return JSON.parse(user);
		}
	}

	setCurrentUser(data) {
		localStorage.setItem('user', JSON.stringify(data.user));
		localStorage.setItem('token', data.token);
	}

	deleteCurrentUser() {
		// remove the user and the user's token from local storage
		localStorage.removeItem('user');
		localStorage.removeItem('token');
	}
}