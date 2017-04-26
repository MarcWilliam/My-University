import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { CanActivate } from '@angular/router';

import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private auth: AuthService, private router: Router) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if(this.auth.isAuthenticated()) {
      if(this.auth.isAdmin()){
        return true;
      } else {
        this.router.navigate(['/home']);
        return false;
      }
    } else {
      // Save URL to redirect to after login and fetching userProfile to get roles
      localStorage.setItem('redirect_url', state.url);
      this.router.navigate(['']);
      return false;
    }
  }
}