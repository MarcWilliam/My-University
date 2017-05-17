import { SEntity } from '../core/s-entity';

/**
 * a passive representation of a course
 * @author Marc Wafik
 */
export class Course extends SEntity {

	name: string;
	code: string;
	description: string;
	creditHours: number;
	level: number;
	departmentID: number;
	prerequisitesIDs: number[];

}