import { SEntity } from '../core/s-entity';

/**
 * a passive representation of a course offerings
 * @author Marc Wafik
 */
export class CourseOffering extends SEntity {
	courseID: number;
	semesterID: number;
	staffIDs: number[];
	constructor(){
		super();
		this.courseID=0;
		this.semesterID=0;
		this.staffIDs=[0];
	}
}