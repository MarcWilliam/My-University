package Registration;

import User.User;
import core.SEntity;

/**
 * sections or groups
 * ex: Group A ,
 * Section A3 would have A as parent
 */
public class Group extends SEntity {

	protected Group parent;
	protected String name, description;

	/**
	 * max number of students for this group
	 */
	protected int maxStudent;
	protected User[] students;

}
