import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { AuthHttp } from 'angular2-jwt';
import { Router } from '@angular/router';

import { Service, CRUDService } from '../services';

@Injectable()
export class CourseService extends CRUDService implements Service {

	constructor(protected http: Http, protected authHttp: AuthHttp, private router: Router) {
		super(http, authHttp);
		this.apiRoute = 'cources';
	}
	public viewDetailsPage(id: string) {
		this.router.navigate(['/edit-course'], { skipLocationChange: true, queryParams: { courseId: id } });
	}

	// If you need to edit the data before sending it to the view. (Optional you might even remove it from here)
	public parseEntry(entry: any) {
		return entry;
	}

}
