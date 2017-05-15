import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { AuthHttp } from 'angular2-jwt';

import { Observable } from 'rxjs/Observable';

import CONFIG from '../app.config';

@Injectable()
export class CRUDService {

  protected apiRoute = '';

  constructor(protected http: Http, protected authHttp: AuthHttp) { }

  public read(Id: string): Observable<Response> {
    return this.authHttp.get(`${CONFIG.API_URL}/${this.apiRoute}/id=${Id}`)
      .map((response: Response) => response.json());
  }

  public readGroup(from: string, Offset: string): Observable<Response> {
    const apiRequest = 'limit=' + from + '&offset=' + Offset;
    return this.authHttp.get(`${CONFIG.API_URL}/${this.apiRoute}/?${apiRequest}`)
      .map((response: Response) => response.json());
  }

  public create(permission: Permission, data: any): Observable<Response> {

    return this.authHttp.post(`${CONFIG.API_URL}/${this.apiRoute}/permission`, data)
      .map((response: Response) => response.json());
  }

  public delete(ids: Array<string>): Observable<Response> {
    let apiRequest = ids[0];
    for (let i = 1; i < ids.length; i++) {
      apiRequest = apiRequest + ',' + ids[i];
    }
    return this.authHttp.delete(`${CONFIG.API_URL}/${this.apiRoute}/${apiRequest}`)
      .map((response: Response) => response.json());
  }

  public update(permission: Permission, data: any): Observable<Response> {
    return this.authHttp.put(`${CONFIG.API_URL}/${this.apiRoute}/permission`, data)
      .map((response: Response) => response.json());
  }

}
export class Permission {

  id: number = 0;
  createdAt: Date = null;
  updatedAt: Date = null;

  createSelf: boolean = false;
  deleteSelf: boolean = false;
  readSelf: boolean = false;
  updateSelf: boolean = false;

  createOther: boolean = false;
  deleteOther: boolean = false;
  readOther: boolean = false;
  updateOther: boolean = false;

}