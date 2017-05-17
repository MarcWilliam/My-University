import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { User } from './user';
import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { DatePipe } from '@angular/common';

import { AuthenticationService } from './authentication.service';
import { AuthHttp } from 'angular2-jwt';

import CONFIG from '../app.config';
import { CRUDService } from './CRUD.service';

@Injectable()
export class UserService extends CRUDService {
    private datePipe = new DatePipe('en-US');

    private userSubject: ReplaySubject<any> = new ReplaySubject(1);

    constructor(http: Http, authHttp: AuthHttp) {
        super(http, authHttp);
        this.apiRoute = 'users';
    }

    public read(key?: string, values?: any[], limit?: any, offset?: any, type?: string): any {
        super.read(key, values, limit, offset, type).subscribe(response => {
            this.userSubject.next(this._parseData(response.data));
        });
        return this.userSubject;
    }

    public register(user: User): Observable<any> {
        return this.http.post(`${CONFIG.API_URL}/${this.apiRoute}/register`, user).map((response: Response) => response.json());
    }

    public login(credentials: any): Observable<any> {
        return this.http.post(`${CONFIG.API_URL}/${this.apiRoute}/login`, credentials).map((response: Response) => response.json());
    }

    private _parseData(data: any[]) {
        for (let i in data) {
            data[i] = this._parseEntry(data[i]);
        }
        return data;
    }

    private _parseEntry(entry: any) {
        delete entry.hashedPassword;
        entry.birthDate = this.datePipe.transform(entry.birthDate, 'dd-MM-yyyy');
        entry.createdAt = this.datePipe.transform(entry.createdAt, 'dd-MM-yyyy');
        entry.updatedAt = this.datePipe.transform(entry.updatedAt, 'dd-MM-yyyy');
        return entry;
    }
}
