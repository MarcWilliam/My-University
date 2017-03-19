package Registration;

import User.User;
import core.SEntity;
import java.util.Date;

/**
 * an instance of a course for each semester/year
 */
public class CourseOffering extends SEntity {

	Course course;
	int Year;
	Semester semester;
	User[] staff;
	Date registrationEnd;
	Group group;

	/**
	 * loop throw the prerequisite to check if the user passed them all
	 *
	 * @param user_id
	 * @return true if user has done all the prerequisite else false
	 */
	boolean checkPrerequisite(int user_id) {
		return false;
	}
}
