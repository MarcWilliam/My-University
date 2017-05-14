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
	}

	public parseRow(row) {
		super.parseRow(row);

		this.name = row.name;
		this.description = row.description;
	}

	public toRow() {
		var row = super.toRow();

		row.name = this.name;
		row.description = this.description;

		return row;
	}
}