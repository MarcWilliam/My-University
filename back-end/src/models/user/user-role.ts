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

	public static async create(data): Promise<boolean> {
		for (var i in data) {
			await Permission.create(data[i].permissions);
		}
		await super.create(data);
		return true;
	}

	public static async delete(data): Promise<boolean> {
		await super.delete(data); // must delete the object first befor delete links
		for (var i in data) {
			await Permission.delete(data[i].permissions);
		}
		return true;
	}

	public static async update(data): Promise<boolean> {
		for (var i in data) {
			await Permission.update(data[i].permissions);
		}
		await super.update(data);
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