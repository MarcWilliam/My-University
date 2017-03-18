package post;

import enrole.SEntity;
import enrole.User;

/**
 *
 * @author AAGOOGLE
 */
public class Comment extends SEntity {

	User user;
	Comment parent;
	String content;

}
