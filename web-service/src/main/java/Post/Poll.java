package Post;

import Notification.Notification;
import core.Permission;

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

	@Override
	public Permission hasPermission() {
		throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
	}

	@Override
	public Object[] search(String query) {
		throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
	}
}
