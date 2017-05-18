import { SEntity } from '../core/s-entity';

/**
 * a passive representation of a course offerings
 * @author Marc Wafik
 */
export class CourseOffering extends SEntity {
	courseID: number = 0;
	semesterID: number = 0;
	staffIDs: number[];
	constructor(){
		super();
		this.courseID=0;
		this.semesterID=0;
		this.staffIDs=[0];
	}
}