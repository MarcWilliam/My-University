import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { AuthHttp } from 'angular2-jwt';
import { Router } from '@angular/router';

import { Service, CRUDService } from '../services';

@Injectable()
export class CourseOfferingService extends CRUDService implements Service {

	constructor(protected http: Http, protected authHttp: AuthHttp, private router: Router) {
		super(http, authHttp);
		this.apiRoute = 'cource_offerings';
	}

}
