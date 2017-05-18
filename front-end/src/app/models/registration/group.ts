import { SEntity } from '../core/s-entity';
import { Permission, hasPermission } from '../user/permission';

/**
 * hold the Semester data and handels CRUD
 * @author Marc Wafik
 */
export class Group extends SEntity implements hasPermission {


	name: String;
	maxStudents: number;
	startTime ;
	durationTime;
	courseOfferingID: number;
	groupID: number;
	constructor(){
	 super();
	 this.name='';
	 this.maxStudents=0;
	 this.startTime=0;
	 this.durationTime=0;
	 this.courseOfferingID=0;
	 this.groupID=0;
	}

}