package Post;

import enrole.SEntity;

/**
 *
 * @author marcw
 */
public class PollQuestion extends SEntity {

	Choice[] choices;
	boolean isRequired;

	boolean hasTextArea;

	static class Choice {

		int number;
		String text;
	}
}
