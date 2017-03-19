package Post;

import Files.UpFile;
import Notification.Notification;
import Notification.NotificationSubject;
import Registration.Group;
import User.User;
import core.SEntity;
import core.Searchable;
import core.hasPermission;

/**
 * a generic post abstract class to hold the common post data
 */
public abstract class AbstractPost extends SEntity implements NotificationSubject<User>, hasPermission, Searchable {

	User creator;
	String title, content;
	UpFile[] files;
	boolean isPublished;

	abstract protected Notification generateNotification(String title, String message);

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

	public Comment[] fetchComments() {
		throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
	}

	public Group[] fetchGroups() {
		throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
	}

	public UpFile[] fetchFiles() {
		throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
	}

	public boolean addGroup(Group group) {
		throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
	}

	public boolean addFile(UpFile file) {
		throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
	}

	public boolean rmGroup(int id) {
		throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
	}

	public boolean rmFile(int id) {
		throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
	}
}
