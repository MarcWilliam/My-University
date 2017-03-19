package Post;

import core.SEntity;

/**
 * a question for poll
 * a poll has an array of it
 */
public class PollQuestion extends SEntity {

	String question, extraInfo;

	Choice[] choices;

	boolean isRequired, hasTextArea;

	static class Choice {

		int number;
		String text;
	}
}
