import { SEntity } from '../core/s-entity';

import { Permission, hasPermission } from './permission';

/**
 * hold the user data
 * @author Marc Wafik
 */
export class User extends SEntity implements hasPermission {

	name: string = '';
	email: string = '';
	birthDate: Date = new Date();

	phone: number = 0;
	password: string = '';
	hashedPassword: string = '';
	gender: number = 0;

	departmentID: number = 1;
	userRoleID: number = 1;

	isEmailValid: boolean = false;
	isPhoneValid: boolean = false;

	role: string = ''; // To be removed

}