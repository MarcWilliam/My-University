import { Permission } from './permission';
import { SEntity } from '../core/s-entity';

/**
 * 
 * @author marcw
 */
export class UserRole extends SEntity {

	name: string;
	description: string;
	isStaff: boolean;

	permissionIDs: {
		user_role: number,
		permission: number,
		user: number,
		department: number,
		course: number,
		semester: number,
		course_offering: number,
		group: number,
		enrollment: number
	}

	permissions: {
		user_role: Permission,
		permission: Permission,
		user: Permission,
		department: Permission,
		course: Permission,
		semester: Permission,
		course_offering: Permission,
		group: Permission,
		enrollment: Permission,
	};

	public parseRow(row) {
		super.parseRow(row);
		this.name = row.name;
		this.description = row.description;
		this.isStaff = row.is_staff;

		this.permissionIDs.user_role = row.user_role;
		this.permissionIDs.permission = row.permission;
		this.permissionIDs.user = row.user;
		this.permissionIDs.department = row.department;
		this.permissionIDs.course = row.course;
		this.permissionIDs.semester = row.semester;
		this.permissionIDs.course_offering = row.course_offering;
		this.permissionIDs.group = row.group;
		this.permissionIDs.enrollment = row.enrollment;

	}

	public toRow() {
		var row = super.toRow();

		row.name = this.name;
		row.description = this.description;
		row.is_staff = this.isStaff;

		row.user_role = this.permissionIDs.user_role;
		row.permission = this.permissionIDs.permission;
		row.user = this.permissionIDs.user;
		row.department = this.permissionIDs.department;
		row.course = this.permissionIDs.course;
		row.semester = this.permissionIDs.semester;
		row.course_offering = this.permissionIDs.course_offering;
		row.group = this.permissionIDs.group;
		row.enrollment = this.permissionIDs.enrollment;

		return row;
	}
}