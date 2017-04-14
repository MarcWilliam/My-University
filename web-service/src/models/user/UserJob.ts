
/**
 * 
 * @author marcw
 */
export class UserJob extends SEntity {
	department: Department;

	role: UserRole;

	genCode: string; // generated code for user to enter at registration

	constructor() {
		super();
	}
}