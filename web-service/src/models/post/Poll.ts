
/**
 * 
 * @author marcw
 */
export class Poll extends AbstractPost {
	isAnonymous: boolean;

	questions: PollQuestion[];

	generateNotification(title: string, message: string): Notification {
		return null;
	}

	isClosed(): boolean {
		return null;
	}

	public hasPermission(): Permission {
		return null;
	}

	public search(query: string): any[] {
		return null;
	}

	constructor() {
		super();
		this.isAnonymous = false;
	}
}
