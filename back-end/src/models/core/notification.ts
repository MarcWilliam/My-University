import { User } from '../user/user';
import { SEntity } from '../core/s-entity';

/**
 * an observer for notification
 */
export interface NotificationObserver<SubjectT> {
	sendNotification(subject?: NotificationSubject<SubjectT>, Notification?: any);
}

/**
 * a subject for notification
 */
export interface NotificationSubject<ObserverT> {

	/**
	 * fetch all the observers from the db and send them new notification
	 * 
	 * @param Notification the notification to be sent
	 * @return true on success false on failure
	 */
	notifyObservers(Notification: Notification);
	addObserver(observer: NotificationObserver<ObserverT>);
	rmObserver(observer: NotificationObserver<ObserverT>);
}

/**
 */
export class Notification extends SEntity {

	title: string;
	message: string;
	sender: User;
	recipient: User;
	priority: number;
	isRead: boolean;

	constructor() {
		super();
		this.priority = 0;
		this.isRead = false;
	}
}
