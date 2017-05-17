import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';

import { AuthHttp } from 'angular2-jwt';

import { Observable } from 'rxjs/Observable';

import { CRUDService, AuthenticationService } from '../services';

import { User } from '../models';

import CONFIG from '../../app.config';

@Injectable()
export class UserService extends CRUDService {

    private datePipe = new DatePipe('en-US');

    constructor(protected http: Http, protected authHttp: AuthHttp, private router: Router) {
        super(http, authHttp);
        this.apiRoute = 'users';
    }

    public register(user: User): Observable<any> {
        return this.http.post(`${CONFIG.API_URL}/${this.apiRoute}/register`, user).map((response: Response) => response.json());
    }

    public login(credentials: any): Observable<any> {
        return this.http.post(`${CONFIG.API_URL}/${this.apiRoute}/login`, credentials).map((response: Response) => response.json());
    }

    public viewDetailsPage(id: string) {
        this.router.navigate(['/edit-profile'], {skipLocationChange: true, queryParams: { otherUserId: id } });
    }

    protected _parseEntry(entry: any) {
        delete entry.hashedPassword;
        delete entry.isEmailValid;
        delete entry.isPhoneValid;

        entry.birthDate = this.datePipe.transform(entry.birthDate, 'medium');
        entry.createdAt = this.datePipe.transform(entry.createdAt, 'medium');
        entry.updatedAt = this.datePipe.transform(entry.updatedAt, 'medium');
        entry.gender    = entry.gender ? 'Male' : 'Female';

        return entry;
    }
}
