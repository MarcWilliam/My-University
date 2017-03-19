package Notification;

import core.SEntity;
import User.User;

/**
 *
 * @author marcw
 */
public class Notification extends SEntity {

	String title, message;
	User sender, recipient;

	int priority;
	boolean isRead;

}
