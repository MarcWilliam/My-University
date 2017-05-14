import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import { AppConfig } from './app.config';
import { Permission } from './permission';

@Injectable()
export class PermissionService {
	
	constructor(private http:http , private config:config) {}
	public create(permission:Permission): Observable<Response>{
		return this.http.get(`${this.config.API_URL}/user-role/` , permission).map((response: Response) => response.json());
	}
	public delete(id:number): Observable<Response>{
		return this.http.get(`${this.config.API_URL}/user-role/id`).map((response: Response) => response.json());
	}
	public getAll():Observable<any>{
		return this.http.get(`${this.config.API_URL}/user-role/all`).map((response: Response) => response.json());
	}
	public getById(id:number):Observable<any>{
		return this.http.get(`${this.config.API_URL}/user-role/id`).map((response: Response) => response.json());	
	}
	public update(permission:Permission):Observable<Response>{
		return this.http.get(`${this.config.API_URL}/user-role/permission.id` , permission).map((response: Response) => response.json());		
	}

}