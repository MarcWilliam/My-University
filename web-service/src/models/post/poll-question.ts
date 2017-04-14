
/**
 * a question for poll
 * a poll has an array of it
 */
export class PollQuestion extends SEntity {
	question: string;

	extraInfo: string;

	choices: PollQuestion.Choice[];

	isRequired: boolean;

	hasTextArea: boolean;

	constructor() {
		super();
		this.isRequired = false;
		this.hasTextArea = false;
	}
}
PollQuestion["__class"] = "Post.PollQuestion";


export namespace PollQuestion {

	export class Choice {
		number: number;

		text: string;

		constructor() {
			this.number = 0;
		}
	}
	Choice["__class"] = "Post.PollQuestion.Choice";

}