package Post;

import User.User;
import core.SEntity;

/**
 * a comment for a post
 * it also support hierarchy ( different comment levels)
 */
public class Comment extends SEntity {

	protected Comment parent;
	protected String content;

	protected User user;
	protected AbstractPost post;

	protected int post_id, user_id;

}
