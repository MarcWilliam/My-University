package Notification;

import enrole.SEntity;
import enrole.User;

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
