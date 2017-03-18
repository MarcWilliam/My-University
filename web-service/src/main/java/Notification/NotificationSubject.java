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
