import { Department } from '../registration/department';
import { UserRole } from "./user-role";
import { SEntity } from "../core/s-entity";

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