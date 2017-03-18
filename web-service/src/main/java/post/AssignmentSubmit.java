package post;

import enrole.SEntity;
import enrole.User;
import Files.UpFile;

/**
 *
 * @author marcw
 */
public class AssignmentSubmit extends SEntity {

	User student;
	Assignment assignmet;
	int grade;
	String studentNotes;
	UpFile[] files;
}
