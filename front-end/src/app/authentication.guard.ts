import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class AuthenticationGuard implements CanActivate {

constructor(private router: Router) {}

canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    if (tokenNotExpired('currentUser')) {
        return true;
    }
    
    this.router.navigate(['/login']);
    return false;
    }
}
