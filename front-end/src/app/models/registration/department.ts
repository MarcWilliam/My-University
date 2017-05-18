import { SEntity } from '../core/s-entity';

/**
 * Department can be Faculty of CS or English Department ...etc
 * @author Marc Wafik
 */
export class Department extends SEntity {

	name: string;
	description: string;

	constructor() {
		super();
		this.name = '';
		this.description = '';
	}

}