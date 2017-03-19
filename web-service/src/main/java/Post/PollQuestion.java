package Post;

import core.SEntity;

/**
 * a question for poll
 * a poll has an array of it
 */
public class PollQuestion extends SEntity {

	protected String question, extraInfo;

	protected Choice[] choices;

	protected boolean isRequired, hasTextArea;

	public static class Choice {

		int number;
		String text;
	}
}
