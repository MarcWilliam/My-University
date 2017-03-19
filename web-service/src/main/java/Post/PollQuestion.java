package Post;

import core.SEntity;

/**
 *
 * @author marcw
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
