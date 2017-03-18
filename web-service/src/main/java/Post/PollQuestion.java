package Post;

import enrole.SEntity;

/**
 *
 * @author marcw
 */
public class PollQuestion extends SEntity {

	Choices[] options;
	boolean isRequired;

	boolean hasTextArea;

	static class Choices {

		int number;
		String text;
	}
}
