package Post;

import java.util.Date;
import enrole.CourseOffering;
import enrole.Group;

/**
 *
 * @author marcw
 */
public class Exam extends Post {

	int maxGrades;
	CourseOffering course;

	Date StartTime, EndTime;

	Group[] Groups;
}
