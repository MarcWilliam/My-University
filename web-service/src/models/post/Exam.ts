import { Graded } from './graded';

/**
 * 
 * @author marcw
 */
export class Exam extends Graded {
	
	StartTime: Date;
	EndTime: Date;

	constructor() {
		super();
	}
}