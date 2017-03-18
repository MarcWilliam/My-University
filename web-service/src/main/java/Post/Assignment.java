package Post;

import java.util.Date;
import enrole.CourseOffering;
import enrole.Group;

/**
 *
 * @author marcw
 */
public class Assignment extends Post {

	Date dueDate, lateSubmits;
	int maxGrade;
	CourseOffering course;
	Group[] groups;
}
