import { Injectable } from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
import { Router } from '@angular/router';

import * as auth0 from 'auth0-js';
import { CONFIG } from './auth.config';

@Injectable()
export class AuthService {

  // Configure Auth0
  auth0 = new auth0.WebAuth({
    domain: CONFIG.domain,
    clientID: CONFIG.clientID,
    redirectUri: CONFIG.callbackURL,
    responseType: 'token id_token'
  });

  //Store profile object in auth class
  user: any;

  constructor(private router: Router) {
    // Set user attribute if already saved profile
    this.user = JSON.parse(localStorage.getItem('user'));
  }

  public handleAuthentication(): void {
    this.auth0.parseHash({ _idTokenVerification: false }, (err, authResult) => {

      if (err) {
        alert(`Error: ${err.errorDescription}`)
      }
      
      if (authResult && authResult.accessToken && authResult.idToken) {
        window.location.hash = '';
        localStorage.setItem('access_token', authResult.accessToken);
        localStorage.setItem('id_token', authResult.idToken);

        this.auth0.client.userInfo(authResult.accessToken, (err, user) => {
          localStorage.setItem('user', JSON.stringify(user));
          this.user = user;

          // Redirect if there is a saved url to do so.
          var redirectUrl: string = localStorage.getItem('redirect_url');
          if(redirectUrl != undefined) {
            this.router.navigate([redirectUrl]);
            localStorage.removeItem('redirect_url');
          }
        });
      }
    });
  }

  public login(email: string, password: string): void {
    this.auth0.redirect.loginWithCredentials({
      connection: 'Email-Password-Authentication',
      email,
      password
    }, err => {
      if (err) return alert(err.description);
    });
  }

  public signup(email, password): void {
    this.auth0.redirect.signupAndLogin({
      connection: 'Email-Password-Authentication',
      email,
      password,
    }, err => {
      if (err) return alert(err.description);
    });
  }

  public loginWithGoogle(): void {
    this.auth0.authorize({
      connection: 'google-oauth2',
    });
  }

  public isAuthenticated(): boolean {
    // Check whether the id_token is expired or not
    return tokenNotExpired('id_token');
  }

  public isAdmin() {
    return this.user && this.user.app_metadata
      && this.user.app_metadata.roles
      && this.user.app_metadata.roles.indexOf('admin') > -1;
  }

  public logout(): void {
    // Remove token from localStorage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    this.router.navigate(['/login']);
  }

  private setUser(authResult): void {
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    this.auth0.client.userInfo(authResult.accessToken, (err, user) => {
      localStorage.setItem('user', JSON.stringify(user));
    });
  }
}