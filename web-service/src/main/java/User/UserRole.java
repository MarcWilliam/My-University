package User;

import core.Permission;

/**
 *
 * @author marcw
 */
public class UserRole {

	protected String name,
			description;
	protected boolean isStaff;

	protected Permission USER,
			ASSIGNMENT,
			ASSIGNMENT_SUBMIT,
			COURSE,
			COURSE_OFFERING,
			DEPARTMENT,
			POST,
			COMMENT,
			POLL,
			POLL_ANSWER,
			GROUP;

}
