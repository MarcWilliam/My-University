import { SEntity } from '../core/s-entity';
import CONFIG from '../../config';

/**
 * Department can be Faculty of CS or English Department ...etc
 * @author Marc Wafik
 */
export class Department extends SEntity {

	static DB_TABLE = {
		PRIM: CONFIG.DB.TABLE_PREFIX + "department",
		REL: { }
	};

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