
/**
 * holds the permissions of CRUD
 */
export class Permission {
	create: boolean;

	read: boolean;

	update: boolean;

	delete: boolean;

	constructor() {
		this.create = false;
		this.read = false;
		this.update = false;
		this.delete = false;
	}
}
