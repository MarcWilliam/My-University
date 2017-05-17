import { SEntity } from '../core/s-entity';
import { UserRole } from './user-role';
import { User } from './user';

/**
 * holds the permissions of CRUD
 * @author Marc Wafik
 */
export class Permission extends SEntity {

	self: CRUDpermission;
	others: CRUDpermission;

}

export interface CRUDpermission {
	create: boolean;
	read: boolean;
	update: boolean;
	delete: boolean;
}

export interface hasPermission {
	/**
	 * @return the current user permission
	 */
	hasPermission(user: User, role: UserRole): CRUDpermission;
}