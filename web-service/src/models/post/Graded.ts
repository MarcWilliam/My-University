import { CourseOffering } from '../registration/course-offering';
import { AbstractPost } from './abstract-post';
import { Permission } from '../core/permission';

/**
 * used to record student grades for example an exam, quiz .. etc
 */
export class Graded extends AbstractPost {
	
	cource: CourseOffering;
	maxGrade: number;
	scaleFactor: number;

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
		this.maxGrade = 0;
		this.scaleFactor = 0;
	}
}