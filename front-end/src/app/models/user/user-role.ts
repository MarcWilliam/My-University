import { Permission } from './permission';
import { SEntity } from '../core/s-entity';

/**
 * Holds the user permissions and access
 * @author Marc Wafik
 */
export class UserRole extends SEntity {

	name: string;
	description: string;
	isStaff: boolean;
	canEditOptions: boolean;

	permissions: {
		UserRole: Permission,
		User: Permission,
		Department: Permission,
		Course: Permission,
		Semester: Permission,
		CourseOffering: Permission,
		Group: Permission,
		SemesterEnrollment: Permission,
		CourceOfferingEnrollment: Permission
	};

	constructor() {
		super();
		this.name = "";
		this.description = "";
		this.isStaff = false;
		this.canEditOptions = false;

		this.permissions = {
			UserRole: new Permission(),
			User: new Permission(),
			Department: new Permission(),
			Course: new Permission(),
			Semester: new Permission(),
			CourseOffering: new Permission(),
			Group: new Permission(),
			SemesterEnrollment: new Permission(),
			CourceOfferingEnrollment: new Permission()
		};
	}

}