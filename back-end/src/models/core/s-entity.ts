import { DBsql } from '../core/db-sql';

export class SEntity {
	static DB_TABLE = { PRIM: "", RELATIONAL: {} };

	id: number;
	createdAt: Date;
	updatedAt: Date;

	public parseRow(row) {
		this.id = row.id;
		this.createdAt = row.created_at;
		this.updatedAt = row.updated_at;
	}

	public toRow() {
		var row: any = {};

		this.id = row.id;
		row.created_at = this.createdAt;
		row.updated_at = this.updatedAt;

		return row;
	}

	public async isValid() { return true; }

	public async save(): Promise<boolean> {
		return (this.id === 0) ? this.create() : this.update();
	}

	/**
	 * update the object data in the DB
	 * this.id must be same as the thing to be updated
	 *
	 * @return True if everything pass else false
	 */
	public async update(): Promise<boolean> {
		var data = this.toRow();
		delete data.id;
		delete data.created_at;
		delete data.updated_at;

		let connection = await DBsql.getConnection();
		let [rows, fields] = await connection.execute(
			`UPDATE ${(<any>this.constructor).DB_TABLE.PRIM} SET ? where id=`,
			[data, this.id]);

		return true;
	}

	/**
	 * insert the object data in the DB
	 * this.id must 0
	 * this.id will be updated to the new id
	 *
	 * @return True if everything pass else false
	 */
	public async create(): Promise<boolean> {
		var data = await this.toRow();
		delete data.id;
		delete data.created_at;
		delete data.updated_at;

		let connection = await DBsql.getConnection();

		try {
			let [rows, fields] = await connection.execute(
				`INSERT INTO ${(<any>this.constructor).DB_TABLE.PRIM} SET ?`, data);
		} catch (e) {
			console.error(e);
		}

		// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< set this.id here
		return true;
	}

	/**
	 * delete the object data in the DB
	 * this.id must be same as the thing to be updated
	 *
	 * @return True if everything pass else false
	 */
	public async delete(): Promise<boolean> {
		let connection = await DBsql.getConnection();
		let [rows, fields] = await connection.execute(
			`DELETE FROM ${(<any>this.constructor).DB_TABLE.PRIM} WHERE id = ?`,
			[this.id]);
		return true;
	}

	/**
	 * select the object data from the DB
	 * set this object data to the current
	 *
	 * @return True if everything pass else false
	 */
	public static async read(colum: string, data: any) {
		let connection = await DBsql.getConnection();

		let [rows, fields] = await connection.execute(
			`SELECT * FROM ${this.DB_TABLE.PRIM} WHERE ${colum} = ?`, [data]);
		var ret = [];
		for (var key in rows) {
			var element = rows[key];
			var temp = new this();
			temp.parseRow(rows[key]);
			ret.push(temp);
		}
		return ret;
	}

	public static cast(obj) {
		var obj = this.constructor();
		for (let i in obj) {
			obj[i] = obj[i];
		}
		return obj;
	}
}