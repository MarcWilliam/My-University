import { Permission } from './permission';
import { SEntity } from '../core/s-entity';
import { DBopp } from '../core/db';
import CONFIG from '../../config';

/**
 * Holds the user permissions and access
 * @author Marc Wafik
 */
export class UserRole extends SEntity {

	name: string;
	description: string;
	isStaff: boolean;
	canEditOptions: boolean;

	static DB_TABLE = {
		PRIM: CONFIG.DB.TABLE_PREFIX + "user_role",
		REL: {}
	};

	permissions: {
		user_role: Permission,
		user: Permission,
		department: Permission,
		course: Permission,
		semester: Permission,
		course_offering: Permission,
		group: Permission,
		semester_enrollment: Permission,
		cource_offering_enrollment: Permission
	};

	public parseRow(row) {
		super.parseRow(row);
		this.name = row.name;
		this.description = row.description;
		this.isStaff = row.is_staff;
		this.canEditOptions = row.can_edit_options;

		this.permissions = {
			user_role: new Permission(),
			user: new Permission(),
			department: new Permission(),
			course: new Permission(),
			semester: new Permission(),
			course_offering: new Permission(),
			group: new Permission(),
			semester_enrollment: new Permission(),
			cource_offering_enrollment: new Permission()
		};

		this.permissions.user_role.id = row.user_role;
		this.permissions.user.id = row.user;
		this.permissions.department.id = row.department;
		this.permissions.course.id = row.course;
		this.permissions.semester.id = row.semester;
		this.permissions.course_offering.id = row.course_offering;
		this.permissions.group.id = row.group;
		this.permissions.semester_enrollment.id = row.semester_enrollment;
		this.permissions.cource_offering_enrollment.id = row.cource_offering_enrollment;
	}

	public toRow() {
		var row = super.toRow();

		row.name = this.name;
		row.description = this.description;
		row.is_staff = this.isStaff;
		row.can_edit_options = this.canEditOptions;

		row.user_role = this.permissions.user_role.id;
		row.user = this.permissions.user.id;
		row.department = this.permissions.department.id;
		row.course = this.permissions.course.id;
		row.semester = this.permissions.semester.id;
		row.course_offering = this.permissions.course_offering.id;
		row.group = this.permissions.group.id;
		row.semester_enrollment = this.permissions.semester_enrollment.id;
		row.cource_offering_enrollment = this.permissions.cource_offering_enrollment.id;

		return row;
	}

	public static async Create(data): Promise<boolean> {
		for (var i in data) {
			await Permission.Create(data[i].permissions);
		}
		await super.Create(data);
		return true;
	}

	public static async Delete(data): Promise<boolean> {
		await super.Delete(data); // must delete the object first befor delete links
		for (var i in data) {
			await Permission.Delete(data[i].permissions);
		}
		return true;
	}

	public static async Update(data): Promise<boolean> {
		for (var i in data) {
			await Permission.Update(data[i].permissions);
		}
		await super.Update(data);
		return true;
	}

	public static async Read(feilds: {}, opp: DBopp = DBopp.AND, limit?: number, offset?: number) {
		var roles = await super.Read(feilds, opp, limit, offset);

		for (let i in roles) {
			for (let key in roles[i].permissions) { //<<<<<<<<<<<<< use prepaired for preformence LATER
				roles[i].permissions[key] = await Permission.Read({ id: roles[i].permissions[key].id })[0];
			}
		}

		return roles;
	}
}