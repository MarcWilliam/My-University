
/**
 * an observer for notification
 */
export interface NotificationObserver<SubjectT> {
	sendNotification(subject?: any, Notification?: any): any;
}