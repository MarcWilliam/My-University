/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package models;

/**
 *
 * @author marcw
 */
public class Notification extends SEntity {

	String title, message;
	User sender, recipient;

	int priority;
	boolean isRead;

	public static interface Observer<SubjectT> {

		public boolean sendNotification(SubjectT subject, Notification Notification);
	}

	public interface Subject<ObserverT> {

		public boolean add2NotificationList(ObserverT observer);

		public boolean rmNotificationList(ObserverT observer);

		public boolean notifyObservers(Notification Notification);
	}
}
