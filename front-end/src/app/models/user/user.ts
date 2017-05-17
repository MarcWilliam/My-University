import { SEntity } from '../core/s-entity';

import { Permission, hasPermission } from './permission';

/**
 * hold the user data
 * @author Marc Wafik
 */
export class User extends SEntity implements hasPermission {

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

	role: string; // To be removed

}