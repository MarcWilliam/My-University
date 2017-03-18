package Post;

import Files.UpFile;
import Notification.Notification;
import Notification.NotificationSubject;
import enrole.Group;
import enrole.SEntity;
import enrole.User;

/**
 *
 * @author AAGOOGLE
 */
public class AbstractPost extends SEntity implements NotificationSubject<User> {

	User creator;
	Comment[] comments;
	Group[] groups;
	UpFile[] files;
	String title, content;

	
	@Override
	public boolean add2NotificationList(User observer) {
		throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
	}

	@Override
	public boolean rmNotificationList(User observer) {
		throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
	}

	@Override
	public boolean notifyObservers(Notification Notification) {
		throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
	}

}
