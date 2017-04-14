import { Graded } from './graded';

/**
 * 
 * @author marcw
 */
export class Assignment extends Graded {
	
	dueDate: Date;
	lateSubmits: Date;

	constructor() {
		super();
	}
}