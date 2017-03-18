package post;

import java.util.Date;
import enrole.CourceOffering;
import enrole.Group;

/**
 *
 * @author marcw
 */
public class Assignment extends Post {

	Date dueDate, lateSubmits;
	int maxGrade;
	CourceOffering cource;
	Group[] groups;
}
