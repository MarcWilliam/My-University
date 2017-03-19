package Registration;

import core.SEntity;
import User.User;

/**
 *
 * @author AAGOOGLE
 */
public class Group extends SEntity {

	Group parent;
	String name, description;
	int maxStudent;
	User[] students;

}
