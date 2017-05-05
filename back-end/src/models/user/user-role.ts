import { Permission } from './permission';
import { SEntity } from '../core/s-entity';
import CONFIG from '../../config';

/**
 * 
 * @author marcw
 */
export class UserRole extends SEntity {

	name: string;
	description: string;
	isStaff: boolean;

	static DB_TABLE = {
		PRIM: CONFIG.DB.TABLE_PREFIX + "user_role",
		RELATIONAL: {}
	};

	permissions: {
		user_role: Permission,
		permission: Permission,
		user: Permission,
		department: Permission,
		course: Permission,
		semester: Permission,
		course_offering: Permission,
		group: Permission,
		enrollment: Permission
	};

	public parseRow(row) {
		super.parseRow(row);
		this.name = row.name;
		this.description = row.description;
		this.isStaff = row.is_staff;

		this.permissions = {
			user_role: new Permission(),
			permission: new Permission(),
			user: new Permission(),
			department: new Permission(),
			course: new Permission(),
			semester: new Permission(),
			course_offering: new Permission(),
			group: new Permission(),
			enrollment: new Permission()
		};
		
		this.permissions.user_role.id = row.user_role;
		this.permissions.permission.id = row.permission;
		this.permissions.user.id = row.user;
		this.permissions.department.id = row.department;
		this.permissions.course.id = row.course;
		this.permissions.semester.id = row.semester;
		this.permissions.course_offering.id = row.course_offering;
		this.permissions.group.id = row.group;
		this.permissions.enrollment.id = row.enrollment;

	}

	public toRow() {
		var row = super.toRow();

		row.name = this.name;
		row.description = this.description;
		row.is_staff = this.isStaff;

		row.user_role = this.permissions.user_role.id;
		row.permission = this.permissions.permission.id;
		row.user = this.permissions.user.id;
		row.department = this.permissions.department.id;
		row.course = this.permissions.course.id;
		row.semester = this.permissions.semester.id;
		row.course_offering = this.permissions.course_offering.id;
		row.group = this.permissions.group.id;
		row.enrollment = this.permissions.enrollment.id;

		return row;
	}

	public async create(): Promise<boolean> {

	/*	for (var key in this.permissions) { // <<<<<<<<<<<<< use prepaired for preformence LATER
			await this.permissions[key].create();
		}*/
		await Permission.create(this.permissions);
		await super.create();
		return true;
	}

	public async delete(): Promise<boolean> {
		for (var key in this.permissions) { // <<<<<<<<<<<<< use prepaired for preformence LATER
			await this.permissions[key].delete();
		}
		await super.delete();
		return true;
	}

	public async update(): Promise<boolean> {
		for (var key in this.permissions) { // <<<<<<<<<<<<< use prepaired for preformence LATER
			await this.permissions[key].update();
		}
		await super.update();
		return true;
	}

	public static async read(colum: string, data: any) {
		var roles = await super.read(colum, data);

		for (let i in roles) {
			for (let key in roles[i].permissions) { // <<<<<<<<<<<<< use prepaired for preformence LATER
				roles[i].permissions[key] = await Permission.read('id', roles[i].permissions[key].id)[0];
			}
		}

		return roles;
	}
}