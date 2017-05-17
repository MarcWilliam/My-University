import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { User } from '../models';
import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { DatePipe } from '@angular/common';

import { AuthenticationService } from '../services';
import { AuthHttp } from 'angular2-jwt';

import CONFIG from '../../app.config';
import { CRUDService } from '../services';
import { Router } from '@angular/router';

@Injectable()
export class UserService extends CRUDService {
    private datePipe = new DatePipe('en-US');

    private userSubject: ReplaySubject<any> = new ReplaySubject(1);

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

    public parseData(data: any[]) {
        for (const field of Object.keys(data)) {
            data[field] = this._parseEntry(data[field]);
        }
        return data;
    }

    private _parseEntry(entry: any) {
        delete entry.hashedPassword;
        delete entry.isEmailValid;
        delete entry.isPhoneValid;

        entry.birthDate     = this.datePipe.transform(entry.birthDate, 'medium');
        entry.createdAt     = this.datePipe.transform(entry.createdAt, 'medium');
        entry.updatedAt     = this.datePipe.transform(entry.updatedAt, 'medium');
        entry.gender        = entry.gender ? 'Male' : 'Female';

        return entry;
    }
}
