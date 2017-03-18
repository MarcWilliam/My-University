package Notification;

/**
 *
 * @author marcw
 */
public interface Observer<SubjectT> {

	public boolean sendNotification(SubjectT subject, Notification Notification);

}
