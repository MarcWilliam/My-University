
/**
 * a passive representation of a course
 */
export class Course extends SEntity {
	name: string;

	code: string;

	description: string;

	prerequisites: Course[];

	creditHours: number;

	level: number;

	department: Department;

	constructor() {
		super();
		this.creditHours = 0;
		this.level = 0;
	}
}