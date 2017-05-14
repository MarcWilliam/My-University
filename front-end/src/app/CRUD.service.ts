import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import CONFIG from '../app.config';

@Injectable()
export class CRUDService {

   ApiRoute:string ="";


  constructor(private http:Http) {}



  public read(Id:string): Observable<Response> {
    return this.http.get(`${CONFIG.API_URL}/${this.ApiRoute}/id=Id`,this.jwt()).map((response: Response) => response.json());
  }



  public readGroup(from:string,Offset:string): Observable<Response> {
    var apiRequest="limit="+from+"&offset="+Offset;
    return this.http.get(`${CONFIG.API_URL}/${this.ApiRoute}/?apiRequest`,this.jwt()).map((response: Response) => response.json());
  }


  public create(permission:Permission): Observable<Response>{

    return this.http.post(`${CONFIG.API_URL}/${this.ApiRoute}/permission`,this.jwt()).map((response: Response) => response.json());
  }
  

  public delete(ids:Array<string>): Observable<Response>{
  	var apiRequest =ids[0];
  	for (var i = 1; i < ids.length; i++) {
  		apiRequest=apiRequest+","+ids[i];
  	}
    return this.http.delete(`${CONFIG.API_URL}/${this.ApiRoute}/apiRequest`,this.jwt()).map((response: Response) => response.json());
  }
 
  public update(permission:Permission):Observable<Response>{
    return this.http.put(`${CONFIG.API_URL}/${this.ApiRoute}/permission`,this.jwt()).map((response: Response) => response.json());   
  }
  private jwt(): RequestOptions {
        // create authorization header with jwt token
        const currentUserToken = JSON.parse(localStorage.getItem('id_token'));
        if (currentUserToken) {
            const headers = new Headers({ 'Authorization': 'Bearer ' + currentUserToken });
            return new RequestOptions({ headers: headers });
        }
    }

}
export class Permission  {
	
	id: number = 0;
    createdAt: Date = null;
    updatedAt: Date = null;

    createSelf: boolean = false;
    deleteSelf: boolean = false;
    readSelf  : boolean = false;
    updateSelf: boolean = false;

    createOther: boolean = false;
    deleteOther: boolean = false;
    readOther  : boolean = false;
    updateOther: boolean = false;

}