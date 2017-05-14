import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { User } from './user';
import { Observable } from 'rxjs/Observable';

import { AuthenticationService } from './authentication.service';

import CONFIG from '../app.config';

@Injectable()
export class UserService {
    constructor(private http: Http) { }

    public getAll(): Observable<Response> {
        return this.http.get(`${CONFIG.API_URL}/users`, this.jwt()).map((response: Response) => response.json());
    }

    public getById(id: number): Observable<Response> {
        return this.http.get(`${CONFIG.API_URL}/users/id`, this.jwt()).map((response: Response) => response.json());
    }

    public create(user: User): Observable<Response> {
        return this.http.post(`${CONFIG.API_URL}/users`, user, this.jwt()).map((response: Response) => response.json());
    }

    public register(user: User): Observable<any> {
        return this.http.post(`${CONFIG.API_URL}/users/register`, user).map((response: Response) => response.json());
    }

    public login(credentials: any): Observable<any> {
        return this.http.post(`${CONFIG.API_URL}/users/login`, credentials).map((response: Response) => response.json());
    }

    public update(user: User): Observable<Response> {
        return this.http.put(`${CONFIG.API_URL}/users/user.id`, user, this.jwt()).map((response: Response) => response.json());
    }

    public delete(id: number): Observable<Response> {
        return this.http.delete(`${CONFIG.API_URL}/users/id`, this.jwt()).map((response: Response) => response.json());
    }
    // private helper methods
    private jwt(): RequestOptions {
        // create authorization header with jwt token
        const currentUserToken = JSON.parse(localStorage.getItem('id_token'));
        if (currentUserToken) {
            const headers = new Headers({ 'Authorization': 'Bearer ' + currentUserToken });
            return new RequestOptions({ headers: headers });
        }
    }
}