import { SEntity } from '../core/s-entity';
import { Permission, hasPermission } from '../user/permission';

/**
 * hold the Semester data and handels CRUD
 * @author Marc Wafik
 */
export class CourseOfferingEnrollment extends SEntity implements hasPermission {

	courseOfferingID;
	groupID;
	sectionID;
	totalGrade;
	letterGrade;
	userID;
	semesterID;
	constructor(){
		super();
		this.courseOfferingID=0;
		this.groupID=0;
		this.sectionID=0;
		this.totalGrade=0;
		this.letterGrade='NA';
		this.userID=0;
		this.semesterID=0;
	}

}