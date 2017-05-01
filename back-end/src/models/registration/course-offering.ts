import { Group } from './group';
import { User } from '../user/user';
import { Semester } from './semester';
import { Course } from './course';
import { SEntity } from '../core/s-entity';

/**
 * an instance of a course for each semester/year
 */
export class CourseOffering extends SEntity {

	course: Course;
	Year: number;
	semester: Semester;
	staff: User[];
	registrationEnd: Date;
	group: Group;

	/**
	 * loop throw the prerequisite to check if the user passed them all
	 * 
	 * @param user_id
	 * @return true if user has done all the prerequisite else false
	 */
	public checkPrerequisite(user_id: number): boolean {
		return false;
	}

	constructor() {
		super();
		this.Year = 0;
	}
}