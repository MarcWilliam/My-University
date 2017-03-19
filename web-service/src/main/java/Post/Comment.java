package Post;

import User.User;
import core.SEntity;

/**
 * a comment for a post
 * it also support hierarchy ( different comment levels)
 */
public class Comment extends SEntity {

	Comment parent;
	String content;

	User user;
	AbstractPost post;

	int post_id, user_id;

}
