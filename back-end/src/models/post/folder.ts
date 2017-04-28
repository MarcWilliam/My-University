import { AbstractPost } from './abstract-post';
import { CourseOffering } from '../registration/course-offering';
import { Permission } from '../core/permission';

/**
 * a folder used to hold files just for view purpose only
 * can have a folder hierarchy
 */
export class Folder extends AbstractPost {
	
	cource: CourseOffering;
	parent: Folder;

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