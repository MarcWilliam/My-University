import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { AuthHttp } from 'angular2-jwt';

import { Observable } from 'rxjs/Observable';

import CONFIG from '../../app.config';

@Injectable()
export class CRUDService {

  public static SubServices = [];

  public apiRoute = '';

  constructor(protected http: Http, protected authHttp: AuthHttp) { }

  public read(key?: string, values?: any[], limit?: any, offset?: any, type?: string): Observable<any> {
    key = key ? key : '';
    limit = limit ? +limit : '';
    offset = offset ? +offset : '';
    type = type ? '.' + type : '';
    const stringValues = values ? '=' + values.join() : '';

    return this.authHttp.get(`${CONFIG.API_URL}/${this.apiRoute}/${key}${stringValues}/${type}?limit=${limit}&offest=${offset}`)
      .map((response: Response) => response.json());
  }

  public create(data: any): Observable<Response> {
    return this.authHttp.post(`${CONFIG.API_URL}/${this.apiRoute}/`, data)
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

  public update(data: any[]): Observable<Response> {
    return this.authHttp.put(`${CONFIG.API_URL}/${this.apiRoute}/`, data)
      .map((response: Response) => response.json());
  }

  public parseData(data: any[]) {
    for (const field of Object.keys(data)) {
      data[field] = this._parseEntry(data[field]);
    }
    return data;
  }

  protected _parseEntry(entry: any) {
    return entry;
  }
  
}
