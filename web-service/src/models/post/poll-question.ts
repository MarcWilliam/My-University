import { SEntity } from '../core/s-entity';
import { PollChoice } from './poll-choice';

/**
 * a question for poll
 * a poll has an array of it
 */
export class PollQuestion extends SEntity {

	question: string;
	extraInfo: string;
	choices: PollChoice[];
	isRequired: boolean;
	hasTextArea: boolean;

	constructor() {
		super();
		this.isRequired = false;
		this.hasTextArea = false;
	}
}