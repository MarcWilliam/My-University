import { CourseOffering } from './course-offering';
import { User } from '../user/user';

/**
 * 
 * @author marcw
 */
export class CourseRegistration {
	
	courceOffer: CourseOffering;
	student_id: number;
	courceOffer_id: number;
	totalGrade: number;

	/**
	 * recalculate the GPA from the graded items
	 * 
	 * @return true if update success else false
	 */
	public reCaulculateGrade(): boolean {
		return null;
	}

	/**
	 * @return the letter grade representing the grade
	 */
	public getLetterGrade(): string {
		return null;
	}

	/**
	 * fetch the student from the db by id
	 * 
	 * @return the student
	 */
	public fetchStudent(): User {
		return null;
	}

	/**
	 * fetch the course offer the db by id
	 * 
	 * @return
	 */
	public fetchCourceOffer(): User {
		return null;
	}

	constructor() {
		this.student_id = 0;
		this.courceOffer_id = 0;
		this.totalGrade = 0;
	}
}