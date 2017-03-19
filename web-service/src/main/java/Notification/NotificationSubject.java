package Notification;

/**
 * a subject for notification
 */
public interface NotificationSubject<ObserverT> {

	/**
	 * add an observer to the db
	 *
	 * @param observer
	 * @return true on success false on failure
	 */
	public boolean add2NotificationList(ObserverT observer);

	/**
	 * remove an observer from the db
	 *
	 * @param observer
	 * @return true on success false on failure
	 */
	public boolean rmNotificationList(ObserverT observer);

	/**
	 * fetch all the observers from the db and send them new notification
	 *
	 * @param Notification the notification to be sent
	 * @return true on success false on failure
	 */
	public boolean notifyObservers(Notification Notification);

}
