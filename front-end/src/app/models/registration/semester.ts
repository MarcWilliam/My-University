
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

}