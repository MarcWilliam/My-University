package Registration;

import User.User;
import core.SEntity;
import java.util.Date;

/**
 * an instance of a course for each semester/year
 */
public class CourseOffering extends SEntity {

	protected Course course;
	protected int Year;
	protected Semester semester;
	protected User[] staff;
	protected Date registrationEnd;
	protected Group group;

	/**
	 * loop throw the prerequisite to check if the user passed them all
	 *
	 * @param user_id
	 * @return true if user has done all the prerequisite else false
	 */
	public boolean checkPrerequisite(int user_id) {
		return false;
	}
}
