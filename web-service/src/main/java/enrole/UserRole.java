package enrole;

/**
 *
 * @author marcw
 */
public class UserRole {

	String name, description;

	public static enum PermissionItme {
		USER, ASSIGNMENT, ASSIGNMENT_SUBMIT, COURSE, COURSE_OFFERING, DEPARTMENT, GROUP
	}

	public static class Permission {

		PermissionItme Itme;
		boolean create, read, update, delete;
	}
}
