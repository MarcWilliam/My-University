import { Permission } from './permission';
import { SEntity } from '../core/s-entity';
import { DBopp, DBcrud } from '../core/db';
import CONFIG from '../../config';
import { CError } from '../core/error';

/**
 * Holds the user permissions and access
 * @author Marc Wafik
 */
export class UserRole extends SEntity {

	static DB_TABLE = {
		PRIM: CONFIG.DB.TABLE_PREFIX + "user_role",
		REL: {}
	};

	name: string;
	description: string;
	isStaff: boolean;
	canEditOptions: boolean;

	permissions: {
		UserRole: Permission,
		User: Permission,
		Department: Permission,
		Course: Permission,
		Semester: Permission,
		CourseOffering: Permission,
		Group: Permission,
		SemesterEnrollment: Permission,
		CourceOfferingEnrollment: Permission
	};

	public static async ParceData(data: any[]): Promise<SEntity[]> {
		var ret = <UserRole[]>(await super.ParceData(data));
		for (let i in ret) {
			ret[i].permissions = <any>(await Permission.ParceData(<any>ret[i].permissions));
		}
		return ret;
	}


	constructor() {
		super();
		this.name = "";
		this.description = "";
		this.isStaff = false;
		this.canEditOptions = false;

		this.permissions = {
			UserRole: new Permission(),
			User: new Permission(),
			Department: new Permission(),
			Course: new Permission(),
			Semester: new Permission(),
			CourseOffering: new Permission(),
			Group: new Permission(),
			SemesterEnrollment: new Permission(),
			CourceOfferingEnrollment: new Permission()
		};
	}

	public parseRow(row) {
		super.parseRow(row);
		this.name = row.name;
		this.description = row.description;
		this.isStaff = row.is_staff;
		this.canEditOptions = row.can_edit_options;

		this.permissions.UserRole.id = row.user_role;
		this.permissions.User.id = row.user;
		this.permissions.Department.id = row.department;
		this.permissions.Course.id = row.course;
		this.permissions.Semester.id = row.semester;
		this.permissions.CourseOffering.id = row.course_offering;
		this.permissions.Group.id = row.group;
		this.permissions.SemesterEnrollment.id = row.semester_enrollment;
		this.permissions.CourceOfferingEnrollment.id = row.cource_offering_enrollment;
	}

	public toRow() {
		var row = super.toRow();

		row.name = this.name;
		row.description = this.description;
		row.is_staff = this.isStaff;
		row.can_edit_options = this.canEditOptions;

		row.user_role = this.permissions.UserRole.id;
		row.user = this.permissions.User.id;
		row.department = this.permissions.Department.id;
		row.course = this.permissions.Course.id;
		row.semester = this.permissions.Semester.id;
		row.course_offering = this.permissions.CourseOffering.id;
		row.group = this.permissions.Group.id;
		row.semester_enrollment = this.permissions.SemesterEnrollment.id;
		row.cource_offering_enrollment = this.permissions.CourceOfferingEnrollment.id;

		return row;
	}

	public async getErrors(action: DBcrud): Promise<CError[]> {
		return [];
	}

	public static async Create(data): Promise<boolean> {
		for (var i in data) {
			(await Permission.Create(data[i].permissions));
		}
		(await super.Create(data));
		return true;
	}

	public static async Delete(data): Promise<boolean> {
		(await super.Delete(data)); // must delete the object first befor delete links
		for (var i in data) {
			(await Permission.Delete(data[i].permissions));
		}
		return true;
	}

	public static async Update(data): Promise<boolean> {
		for (var i in data) {
			(await Permission.Update(data[i].permissions));
		}
		(await super.Update(data));
		return true;
	}

	public static async Read(feilds: {}, opp: DBopp = DBopp.AND, limit?: number, offset?: number) {
		var roles = (await super.Read(feilds, opp, limit, offset));

		for (let i in roles) {
			for (let key in roles[i].permissions) { //<<<<<<<<<<<<< use prepaired for preformence LATER
				var x = (await Permission.Read({ id: roles[i].permissions[key].id }))[0];
				roles[i].permissions[key] = x;
			}
		}

		return roles;
	}
}