package Post;

import Files.UpFile;
import User.User;
import core.SEntity;

/**
 * a solution for an assignment submitted by a student
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
