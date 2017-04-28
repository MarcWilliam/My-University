import { Permission } from '../core/permission';
import { AbstractPost } from './abstract-post';

export class Post extends AbstractPost {
	generateNotification(title: string, message: string): Notification {
		return null;
	}

	public hasPermission(): Permission {
		return null;
	}

	public search(query: string): any[] {
		return null;
	}

	constructor() {
		super();
	}
}