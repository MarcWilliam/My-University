package Notification;

import User.User;
import core.SEntity;

/**
 *
 */
public class Notification extends SEntity {

	protected String title, message;
	protected User sender, recipient;

	protected int priority;
	protected boolean isRead;

}
