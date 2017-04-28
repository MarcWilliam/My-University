import { Poll } from './poll';
import { User } from '../user/user';

/**
 * an answer for one of the pools question
 */
export class PollAnswer {
	
	poll: Poll;
	user: User;
	optionNumber: number;
	answer: string;

	constructor() {
		this.optionNumber = 0;
	}
}