import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { User } from './user';
import { Observable } from 'rxjs/Observable';

import { AuthenticationService } from './authentication.service';
import { AuthHttp } from 'angular2-jwt';

import CONFIG from '../app.config';
import { CRUDService } from './CRUD.service';

@Injectable()
export class UserService extends CRUDService {

    constructor(http: Http, authHttp: AuthHttp) {
         super(http, authHttp);
         this.apiRoute = 'users';
        }

    public register(user: User): Observable<any> {
        return this.http.post(`${CONFIG.API_URL}/${this.apiRoute}/register`, user).map((response: Response) => response.json());
    }

    public login(credentials: any): Observable<any> {
        return this.http.post(`${CONFIG.API_URL}/${this.apiRoute}/login`, credentials).map((response: Response) => response.json());
    }
}
