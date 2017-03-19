package Registration;

import User.User;
import core.SEntity;

/**
 * sections or groups
 * ex: Group A , 
 * Section A3 would have A as parent
 */
public class Group extends SEntity {

	Group parent;
	String name, description;
	
	/**
	 * max number of students for this group
	 */
	int maxStudent;
	User[] students;

}
