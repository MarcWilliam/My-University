package Notification;

import User.User;
import core.SEntity;

/**
 *
 */
public class Notification extends SEntity {

	String title, message;
	User sender, recipient;

	int priority;
	boolean isRead;

}
