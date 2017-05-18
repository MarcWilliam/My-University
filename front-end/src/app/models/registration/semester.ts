
import { SEntity } from '../core/s-entity';
import { Permission, hasPermission } from '../user/permission';

/**
 * hold the Semester data and handels CRUD
 * @author Marc Wafik
 */
export class Semester extends SEntity implements hasPermission {

	year: number;
	name: String;
	maxCreditHour: number;
	startDate: Date;
	endDate: Date;
	registrationStartDate: Date;
	registrationEndDate: Date;
	departmentID: number;
	constructor(){
		super();
		this.year=0;
		this.name='';
		this.maxCreditHour=0;
		this.endDate=new Date();
		this.registrationEndDate=new Date();
		this.startDate=new Date();
		this.registrationStartDate=new Date();
		this.departmentID=0;
	}

}