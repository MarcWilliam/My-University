/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Notification;

/**
 *
 * @author marcw
 */
public interface NotificationSubject<ObserverT> {

	public boolean add2NotificationList(ObserverT observer);

	public boolean rmNotificationList(ObserverT observer);

	public boolean notifyObservers(Notification Notification);
	
}
