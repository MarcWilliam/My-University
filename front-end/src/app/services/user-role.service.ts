import { Injectable } from '@angular/core';
import { CRUDService } from '../services';
import { Http } from '@angular/http';
import { AuthHttp } from 'angular2-jwt';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';

import { Service } from '../services';

@Injectable()
export class UserRoleService extends CRUDService implements Service {

  private datePipe = new DatePipe('en-US');

  constructor(protected http: Http, protected authHttp: AuthHttp, private router: Router) {
    super(http, authHttp);
    this.apiRoute = 'user_roles';
  }

  protected _parseEntry(entry: any) {
    delete entry.permissions;
    entry.createdAt = this.datePipe.transform(entry.createdAt, 'medium');
    entry.updatedAt = this.datePipe.transform(entry.updatedAt, 'medium');
    return entry;
  }

}
