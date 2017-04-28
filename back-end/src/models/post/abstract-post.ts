import { User } from '../user/user';
import { SEntity } from '../core/s-entity';
import { NotificationSubject } from '../notification/notification-subject';
import { hasPermission } from '../core/has-permission';
import { Searchable } from '../core/searchable';
import { UpFile } from '../files/up-file';
import { Group } from '../registration/group';

/**
 * a generic post abstract class to hold the common post data
 */
export abstract class AbstractPost extends SEntity implements NotificationSubject<User>, hasPermission, Searchable<any> {
	public abstract hasPermission(): any;
	public abstract search(query: any): any;

	creator: User;
	title: string;
	content: string;
	files: UpFile[];
	isPublished: boolean;

	abstract generateNotification(title: string, message: string): Notification;

	public add2NotificationList(observer?: any): any {
		return null;
	}

	public rmNotificationList(observer?: any): any {
		return null;
	}

	public notifyObservers(Notification: Notification): boolean {
		return null;
	}

	public fetchComments(): Comment[] {
		return null;
	}

	public fetchGroups(): Group[] {
		return null;
	}

	public fetchFiles(): UpFile[] {
		return null;
	}

	public addGroup(group: Group): boolean {
		return null;
	}

	public addFile(file: UpFile): boolean {
		return null;
	}

	public rmGroup(id: number): boolean {
		return null;
	}

	public rmFile(id: number): boolean {
		return null;
	}

	constructor() {
		super();
		this.isPublished = false;
	}
}