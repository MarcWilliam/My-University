/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package models.CMS;

import models.*;

/**
 *
 * @author AAGOOGLE
 */
public class Post extends SEntity implements Notification.Subject<User> {

	User creater;
	Comment[] Comments;
	Group[] Groups;
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
