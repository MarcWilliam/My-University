import { SEntity } from '../core/s-entity';
import { Searchable } from '../core/searchable';
import { NotificationObserver } from '../core/notification';
import { Permission, hasPermission } from './permission';
import * as BCrypt from 'bcrypt';
import { DBsql } from '../core/db-sql';
import CONFIG from '../../config';

/**
 */
export class User extends SEntity implements Searchable<User>, hasPermission {

	static DB_TABLE = {
		PRIM: CONFIG.DB.TABLE_PREFIX + "user",
		RELATIONAL: {}
	};

	name: string;
	email: string;
	role: string;
	birthDate: Date;

	phone: number;
	password: string;
	gender: number;

	departmentID: number;
	userRoleID: number;

	isEmailValid: boolean = false;
	isPhoneValid: boolean = false;

	public parseRow(row) {
		super.parseRow(row);
		this.name = row.name;
		this.email = row.email;
		this.role = row.role;
		this.birthDate = row.birth_date;
		this.password = row.password;
		this.gender = row.gender;
		this.phone = row.phone;
		this.departmentID = row.department_id;
		this.userRoleID = row.user_role_id;
		this.isEmailValid = row.email_valid;
		this.isPhoneValid = row.phone_valid;
	}

	public async toRow() {
		await this.hashPassword();

		var row = super.toRow();
		row.name = this.name;
		row.email = this.email;
		row.role = this.role;
		row.birth_date = this.birthDate;
		row.password = this.password;
		row.gender = this.gender;
		row.phone = this.phone;
		row.department_id = this.departmentID;
		row.user_role_id = this.userRoleID;
		row.email_valid = this.isEmailValid;
		row.phone_valid = this.isPhoneValid;

		return row;
	}

	public async isValid() {
		return true;
	}

	/**
	 * check user email and password
	 * if correct start a new session and set this object data to the users
	 * 
	 * @param unique user email
	 * @param password user password
	 * @return true if login success else false
	 */
	public static async Login(email: string, password: string) {
		let user = await User.Read({ email: email })[0];
		if (!user) return null;
		let isMatch = await user.comparePassword(password);
		return isMatch ? user : null;
	}

	/**
	 * reset the session
	 * 
	 * @return true if success else false
	 */
	public async logout() {
		return false;
	}

	public sendNotification(subject?: any, Notification?: any): any {
		return null;
	}

	public search(query: string): User[] {
		return null;
	}

	public hasPermission(): Permission {
		return null;
	}

	private async hashPassword() {
		const saltRounds: number = 12;
		this.password = await BCrypt.hash(this.password, saltRounds);
	}

	public async comparePassword(passwordAttempt) {
		const isMatch: boolean = await BCrypt.compare(passwordAttempt, this.password);
		return isMatch;
	}
}