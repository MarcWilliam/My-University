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

}