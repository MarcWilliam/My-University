package Notification;

/**
 * an observer for notification
 */
public interface NotificationObserver<SubjectT> {

	public boolean sendNotification(SubjectT subject, Notification Notification);

}
