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
	constructor() {
		super();
		this.name = '';
		this.code = '';
		this.description = '';
		this.creditHours = 0;
		this.level = 0;
		this.departmentID = 0;
		this.prerequisitesIDs = [0];
	}

}