import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { AuthenticationService } from './authentication.service';

@Injectable()
export class AuthenticationGuard implements CanActivate {

    constructor(private router: Router, private authenticationService: AuthenticationService) { }

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (this.authenticationService.isloggedIn()) {
            return true;
        }

        this.router.navigate(['/login']);
        return false;
    }
}

@Injectable()
export class AdminGuard implements CanActivate {

    constructor(private router: Router, private authenticationService: AuthenticationService) { }

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        let currentUser = this.authenticationService.getCurrentUser();
        if (currentUser.role == "admin") {
            return true;
        }

        this.router.navigate(['/login']);
        return false;
    }
}

@Injectable()
export class StudentGuard implements CanActivate {

    constructor(private router: Router, private authenticationService: AuthenticationService) { }

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        let currentUser = this.authenticationService.getCurrentUser();
        if (currentUser.role == "student") {
            return true;
        }

        this.router.navigate(['/login']);
        return false;
    }
}

@Injectable()
export class ProfessorGuard implements CanActivate {

    constructor(private router: Router, private authenticationService: AuthenticationService) { }

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        let currentUser = this.authenticationService.getCurrentUser();
        if (currentUser.role == "professor") {
            return true;
        }

        this.router.navigate(['/login']);
        return false;
    }
}