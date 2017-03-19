package Post;

import core.SEntity;
import User.User;

/**
 *
 * @author AAGOOGLE
 */
public class Comment extends SEntity {

	User user;
	Comment parent;
	String content;

}
