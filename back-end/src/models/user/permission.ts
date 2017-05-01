import { SEntity } from '../core/s-entity';
import CONFIG from '../../config';

/**
 * holds the permissions of CRUD
 */
export class Permission extends SEntity {

	self: CRUDpermission = new CRUDpermission();
	others: CRUDpermission = new CRUDpermission();

	static DB_TABLE = {
		PRIM: CONFIG.DB.TABLE_PREFIX + "permission",
		RELATIONAL: {}
	};

	public parseRow(row) {
		super.parseRow(row);
		this.self = new CRUDpermission();
		this.others = new CRUDpermission();

		this.self.create = row.create_self;
		this.self.read = row.read_self;
		this.self.update = row.update_self;
		this.self.delete = row.delete_self;

		this.others.create = row.create_others;
		this.others.read = row.read_others;
		this.others.update = row.update_others;
		this.others.delete = row.delete_others;

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

export class CRUDpermission {
	create: boolean = false;
	read: boolean = false;
	update: boolean = false;
	delete: boolean = false;
}

export interface hasPermission {
	/**
	 * @return the current user permission
	 */
	hasPermission(): Permission;
}