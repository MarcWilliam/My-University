package Post;

import Files.UpFile;
import core.SEntity;
import User.User;

/**
 *
 * @author marcw
 */
public class AssignmentSubmit extends SEntity {

	int studentID, assignmetID;
	int grade;
	String studentNotes;
	UpFile[] files;

	public User fetchStudent() {
		throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
	}

	public Assignment fetchAssignmet() {
		throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
	}

}
