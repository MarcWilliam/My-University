import { SEntity } from '../core/s-entity';

/**
 * a passive representation of a course offerings
 * @author Marc Wafik
 */
export class CourseOffering extends SEntity {
	courseID: number;
	semesterID: number;
	staffIDs: number[];
}