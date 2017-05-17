import { hasPermission } from './../user/permission';
import { UserRole } from '../user/user-role';
import { User } from '../user/user';
import { CRUDpermission } from '../user/permission';

export class SEntity implements hasPermission {


	id: number;
	createdAt: Date;
	updatedAt: Date;

	public hasPermission(user: User, role: UserRole): CRUDpermission {
		return role.permissions[this.constructor.name].others;

	}
}