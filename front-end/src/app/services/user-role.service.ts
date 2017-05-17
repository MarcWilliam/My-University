import { Injectable } from '@angular/core';
import { CRUDService } from '../services';
import { Http } from '@angular/http';
import { AuthHttp } from 'angular2-jwt';
import { Router } from '@angular/router';

@Injectable()
export class UserRoleService extends CRUDService {

  constructor(protected http: Http, protected authHttp: AuthHttp, private router: Router) {
    super(http, authHttp);
    this.apiRoute = 'user_roles';
  }

  protected _parseEntry(entry: any) {
    delete entry.permissions;
    return entry;
  }

}
