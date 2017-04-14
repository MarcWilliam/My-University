
/**
 * a subject for notification
 */
export interface NotificationSubject<ObserverT> {
	add2NotificationList(observer?: any): any;

	rmNotificationList(observer?: any): any;

	/**
	 * fetch all the observers from the db and send them new notification
	 * 
	 * @param Notification the notification to be sent
	 * @return true on success false on failure
	 */
	notifyObservers(Notification: Notification): boolean;
}