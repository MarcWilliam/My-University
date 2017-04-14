import { SEntity } from '../core/s-entity';
import { User } from '../user/user';

/**
 * sections or groups
 * ex: Group A ,
 * Section A3 would have A as parent
 */
export class Group extends SEntity {
	parent: Group;
	name: string;
	description: string;
	maxStudent: number; // max number of students for this group
	students: User[];

	constructor() {
		super();
		this.maxStudent = 0;
	}
}