package Post;

import Notification.Notification;

/**
 *
 * @author marcw
 */
public class Poll extends AbstractPost {

	boolean isAnonymous;

	PollQuestion[] questions;

	@Override
	protected Notification generateNotification(String title, String message) {
		throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
	}

	boolean isClosed() {
		throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
	}
}
