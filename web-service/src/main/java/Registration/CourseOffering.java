package Registration;

import core.SEntity;
import User.User;
import java.util.Date;

/**
 *
 * @author marcw
 */
public class CourseOffering extends SEntity {

	Course course;
	int Year;
	Semester semester;
	User[] staff;
	Date registrationEnd;
	Group group;
}
