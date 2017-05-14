import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/map';
import { tokenNotExpired } from 'angular2-jwt';

import { UserService } from './user.service';

import CONFIG from '../app.config';


@Injectable()
export class AuthenticationService {
    constructor(private http: Http, private userService: UserService, private router: Router) { }

    public signUp(user: any): void {
        this.userService.register(user).subscribe(data => {
            if (data.user && data.token) {
                localStorage.setItem('current_user', JSON.stringify(data.user));
                localStorage.setItem('id_token', data.token);
                if (data.user.role == "admin") {
                    this.router.navigate(['/dashboard']);
                }
                else if (data.user.role == "professor") {
                    this.router.navigate(['/home']);
                }
                else if (data.user.role == "student") {
                    this.router.navigate(['/group']);
                }
            }
        });
    }

    signIn(credentials: any) {
        this.userService.login(credentials).subscribe(data => {
            if (data.user && data.token) {
                localStorage.setItem('current_user', JSON.stringify(data.user));
                localStorage.setItem('id_token', data.token);
                if (data.user.role == "admin") {
                    this.router.navigate(['/dashboard']);
                }
                else if (data.user.role == "professor") {
                    this.router.navigate(['/home']);
                }
                else if (data.user.role == "student") {
                    this.router.navigate(['/group']);
                }
            }
        });
    }

    signOut() {
        // remove the user and the user's token from local storage to log user out
        localStorage.removeItem('current_user');
        localStorage.removeItem('id_token');
        this.router.navigate(['/login']);
    }
    isloggedIn() {
        return tokenNotExpired('id_token');
    }

    getCurrentUser() {
        if (this.isloggedIn) {
            let user = localStorage.getItem('current_user');
            if (user) {
                return JSON.parse(user);
            }
        }
    }
}