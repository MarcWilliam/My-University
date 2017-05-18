import * as BCrypt from 'bcrypt';

import { SEntity } from '../core/s-entity';
import { NotificationObserver } from '../core/notification';
import { Permission, hasPermission } from './permission';
import CONFIG from '../../config';
import { DBcrud } from '../core/db';
import { CError, CErrorCode } from '../core/error';

/**
 * hold the user data
 * @author Marc Wafik
 */
export class User extends SEntity implements hasPermission {

	static DB_TABLE = {
		PRIM: CONFIG.DB.TABLE_PREFIX + "user",
		REL: {}
	};

	name: string;
	email: string;
	birthDate: Date;

	phone: number;
	password: string;
	hashedPassword: string;
	gender: number;

	departmentID: number;
	userRoleID: number;

	isEmailValid: boolean = false;
	isPhoneValid: boolean = false;

	public parseRow(row) {
		super.parseRow(row);
		this.name = row.name;
		this.email = row.email;
		this.birthDate = row.birth_date;
		this.hashedPassword = row.password;
		this.gender = row.gender;
		this.phone = row.phone;
		this.departmentID = row.department_id;
		this.userRoleID = row.user_role_id;
		this.isEmailValid = row.email_valid;
		this.isPhoneValid = row.phone_valid;
	}

	public toRow() {
		var row = super.toRow();
		row.name = this.name;
		row.email = this.email;
		row.birth_date = this.birthDate;
		row.password = this.hashedPassword;
		row.gender = this.gender;
		row.phone = this.phone;
		row.department_id = this.departmentID;
		row.user_role_id = this.userRoleID;
		row.email_valid = this.isEmailValid;
		row.phone_valid = this.isPhoneValid;

		return row;
	}

	public static async ParceData(data: any[]): Promise<SEntity[]> {
		var ret = <User[]>(await super.ParceData(data));
		for (let i in ret) {
			ret[i].hashedPassword = (await ret[i].hashPassword());
		}
		return ret;
	}

	public async getErrors(action: DBcrud): Promise<CError[]> {
		var errs: CError[] = (await super.getErrors(action));

		var uniqueErrs = this.parseUniquenessErrors({
			email: (await (<any>this.constructor).CheckUnique('email', this.email)),
			phone: (await (<any>this.constructor).CheckUnique('phone', this.phone))
		});

		errs.concat(uniqueErrs);

		// department dosen't exists
		// user role dosen't exists
		return errs;
	}

	/**
	 * check user email and password
	 * if correct return the user data
	 * 
	 * @param email user email
	 * @param password user password
	 * @return true if login success else false
	 */
	public static async Login(email: string, password: string) {
		let user = (await User.Read({ email: email }))[0];
		if (!user) return null;
		let isMatch = (await user.comparePassword(password));
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

	/**
	 * hash the user pw to this.hashedPassword then delete this.password
	 * @return 
	 */
	private async hashPassword(): Promise<string> {
		if (this.password) {
			this.hashedPassword = (await BCrypt.hash(this.password, CONFIG.HASH.SALT_ROUNDS));
			delete this.password;
		}
		return this.hashedPassword;
	}

	/**
	 * 
	 * @param passwordAttempt the password to be compared with this.hashedpassword
	 * @return true if same password else false
	 */
	public async comparePassword(passwordAttempt): Promise<Boolean> {
		return (await BCrypt.compare(passwordAttempt, this.hashedPassword));
	}
}