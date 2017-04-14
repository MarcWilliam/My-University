
/**
 * 
 * @author marcw
 */
export class UserRole {
	name: string;

	description: string;

	isStaff: boolean;

	USER: Permission;

	ASSIGNMENT: Permission;

	ASSIGNMENT_SUBMIT: Permission;

	COURSE: Permission;

	COURSE_OFFERING: Permission;

	DEPARTMENT: Permission;

	POST: Permission;

	COMMENT: Permission;

	POLL: Permission;

	POLL_ANSWER: Permission;

	GROUP: Permission;

	constructor() {
		this.isStaff = false;
	}
}