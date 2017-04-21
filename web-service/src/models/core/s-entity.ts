import { DBsql } from '../../helpers/db-sql';

export abstract class SEntity {

	id: number;
	createdAt: Date;
	updatedAt: Date;

	public save(): boolean {
		return (this.id === 0) ? this.create() : this.update();
	}

	/**
	 * update the object data in the DB
	 * this.id must be same as the thing to be updated
	 * 
	 * @return True if everything pass else false
	 */
	public update(): boolean {
		return null;
	}

	/**
	 * insert the object data in the DB
	 * this.id must 0
	 * this.id will be updated to the new id
	 * 
	 * @return True if everything pass else false
	 */
	public create(): boolean {
		return null;
	}

	/**
	 * delete the object data in the DB
	 * this.id must be same as the thing to be updated
	 * 
	 * @return True if everything pass else false
	 */
	public async delete(): Promise<boolean> {

		let connection = await DBsql.getConnection();

		// query database 
		let [rows, fields] = await connection.execute('SELECT * FROM `table` WHERE `name` = ? AND `age` > ?', ['Morty', 14]);
		return true;
	}

	/**
	 * select the object data from the DB
	 * set this object data to the current
	 * 
	 * @return True if everything pass else false
	 */
	public read(id: number): boolean {
		return null;
	}

	constructor() {
		this.id = 0;
	}
}