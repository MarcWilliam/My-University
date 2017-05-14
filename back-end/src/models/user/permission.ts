import { SEntity } from '../core/s-entity';
import CONFIG from '../../config';
import { UserRole } from './user-role';
import { User } from './user';

/**
 * holds the permissions of CRUD
 * @author Marc Wafik
 */
export class Permission extends SEntity {

	self: CRUDpermission;
	others: CRUDpermission;

	static DB_TABLE = {
		PRIM: CONFIG.DB.TABLE_PREFIX + "permission",
		REL: {}
	};

	public parseRow(row) {
		super.parseRow(row);

		this.self = {
			create: row.create_self,
			read: row.read_self,
			update: row.update_self,
			delete: row.delete_self,
		};
		this.others = {
			create: row.create_others,
			read: row.read_others,
			update: row.update_others,
			delete: row.delete_others,
		};
	}

	public toRow() {
		var row = super.toRow();

		row.create_self = this.self.create;
		row.read_self = this.self.read;
		row.update_self = this.self.update;
		row.delete_self = this.self.delete;

		row.create_others = this.others.create;
		row.read_others = this.others.read;
		row.update_others = this.others.update;
		row.delete_others = this.others.delete;

		return row;
	}


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