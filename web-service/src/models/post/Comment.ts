
/**
 * a comment for a post
 * it also support hierarchy ( different comment levels)
 */
export class Comment extends SEntity {
	parent: Comment;

	content: string;

	user: User;

	post: AbstractPost;

	post_id: number;

	user_id: number;

	constructor() {
		super();
		this.post_id = 0;
		this.user_id = 0;
	}
}