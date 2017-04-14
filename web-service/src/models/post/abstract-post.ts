
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
		if (((observer != null && observer instanceof User.User) || observer === null)) {
			let __args = Array.prototype.slice.call(arguments);
			return <any>(() => {
				return null;
			})();
		} else throw new Error('invalid overload');
	}

	public rmNotificationList(observer?: any): any {
		if (((observer != null && observer instanceof User.User) || observer === null)) {
			let __args = Array.prototype.slice.call(arguments);
			return <any>(() => {
				return null;
			})();
		} else throw new Error('invalid overload');
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