package User;

import Notification.Notification;
import Post.AbstractPost;
import Registration.Enrollment;
import core.SEntity;
import java.util.Date;
import Notification.NotificationObserver;

/**
 *
 */
public class User extends SEntity implements NotificationObserver<AbstractPost> {

	String name, email;
	int universityID, phone;
	Date birthDate;
	Enrollment[] enrollments;

	private String hasedPassword;

	/**
	 * check user email and password 
	 * if correct start a new session and set this object data to the users
	 * @param email user email
	 * @param password user password
	 * @return true if login success else false
	 */
	boolean login(String email, String password) {
		return false;
	}

	/**
	 * reset the session
	 * @return true if success else false
	 */
	boolean logout() {
		return false;
	}

	@Override
	public boolean sendNotification(AbstractPost subject, Notification Notification) {
		throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
	}

}
