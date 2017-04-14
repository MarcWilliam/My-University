import { SEntity } from '../core/s-entity';
import { Searchable } from '../core/searchable';
import { hasPermission } from '../core/has-permission';
import { NotificationObserver } from '../notification/notification-observer';
import { AbstractPost } from '../post/abstract-post';
import { Permission } from '../core/permission';
import { Post } from '../post/post';

/**
 */
export class User extends SEntity implements Searchable<User>, hasPermission, NotificationObserver<AbstractPost> {

	name: string;
	email: string;
	phone: number;
	birthDate: Date;
	private hasedPassword: string;

	/**
	 * check user email and password
	 * if correct start a new session and set this object data to the users
	 * 
	 * @param email user email
	 * @param password user password
	 * @return true if login success else false
	 */
	public login(email: string, password: string): boolean {
		return false;
	}

	/**
	 * reset the session
	 * 
	 * @return true if success else false
	 */
	public logout(): boolean {
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

	constructor() {
		super();
		this.phone = 0;
	}
}