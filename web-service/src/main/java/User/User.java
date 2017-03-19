package User;

import Notification.Notification;
import Notification.NotificationObserver;
import Post.AbstractPost;
import core.Permission;
import core.SEntity;
import core.Searchable;
import core.hasPermission;
import java.util.Date;

/**
 *
 */
public class User extends SEntity implements Searchable<User>, hasPermission, NotificationObserver<AbstractPost> {

	String name, email;
	int phone;
	Date birthDate;

	private String hasedPassword;

	/**
	 * check user email and password
	 * if correct start a new session and set this object data to the users
	 *
	 * @param email user email
	 * @param password user password
	 * @return true if login success else false
	 */
	boolean login(String email, String password) {
		return false;
	}

	/**
	 * reset the session
	 *
	 * @return true if success else false
	 */
	boolean logout() {
		return false;
	}

	@Override
	public boolean sendNotification(AbstractPost subject, Notification Notification) {
		throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
	}

	@Override
	public User[] search(String query) {
		throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
	}

	@Override
	public Permission hasPermission() {
		throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
	}

}
