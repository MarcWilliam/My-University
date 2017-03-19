package User;

import core.Permission;

/**
 *
 * @author marcw
 */
public class UserRole {

	String name,
			description;
	boolean isStaff;

	Permission USER,
			ASSIGNMENT,
			ASSIGNMENT_SUBMIT,
			COURSE,
			COURSE_OFFERING,
			DEPARTMENT,
			GROUP;

}
