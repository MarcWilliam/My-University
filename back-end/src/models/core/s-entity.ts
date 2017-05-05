import { DBsql } from '../core/db-sql';

export class SEntity {

	static DB_TABLE = {
		PRIM: "",
		RELATIONAL: {}
	};

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

	public async isValid() {
		return true;
	}

	/**
	 * update the object data in the DB
	 * this.id must be same as the thing to be updated
	 * 
	 * @return True if everything pass else false
	 */
	public async update(): Promise<boolean> { return (<any>this.constructor).update([this]); }

	/**
	 * update the object data in the DB
	 * this.id must be same as the thing to be updated
	 * 
	 * @return True if everything pass else false
	 */
	public static async update(data): Promise<boolean> {
		let connection = await DBsql.getConnection();

		for (var i in data) {
			var row = data[i].toRow();
			delete row.id;
			delete row.created_at;
			delete row.updated_at;

			let [rows, fields] = await connection.query(`UPDATE ?? SET ? where id=?`, [this.DB_TABLE.PRIM, row]);
			data[i].id = rows.insertId;
		}

		return true;
	}

	/**
	 * insert the object data in the DB
	 * this.id must 0
	 * this.id will be updated to the new id
	 * 
	 * @return True if everything pass else false
	 */
	public async create(): Promise<boolean> { return (<any>this.constructor).create([this]); }

	/**
	 * insert the object data in the DB
	 * this.id must 0
	 * this.id will be updated to the new id
	 * 
	 * @return True if everything pass else false
	 */
	public static async create(data): Promise<boolean> {
		let connection = await DBsql.getConnection();

		for (var i in data) {
			var row = data[i].toRow();
			delete row.id;
			delete row.created_at;
			delete row.updated_at;

			let [rows, fields] = await connection.query(`INSERT INTO ?? SET ?`, [this.DB_TABLE.PRIM, row]);
			data[i].id = rows.insertId;
		}

		return true;
	}

	/**
	 * delete the object data in the DB
	 * this.id must be same as the thing to be updated
	 * 
	 * @return True if everything pass else false
	 */
	public static async delete(data): Promise<boolean> {
		let connection = await DBsql.getConnection();
		for (var i in data) {
			let [rows, fields] = await connection.query(`DELETE FROM ?? WHERE id = ?`, [this.DB_TABLE.PRIM, data[i].id]);
		}
		return true;
	}

	/**
	 * delete the object data in the DB
	 * this.id must be same as the thing to be updated
	 * 
	 * @return True if everything pass else false
	 */
	public async delete(): Promise<boolean> { return (<any>this.constructor).delete([this]); }

	/**
	 * select the object data from the DB
	 * set this object data to the current
	 * 
	 * @return True if everything pass else false
	 */
	public static async read(colum: string, data: any) {
		let connection = await DBsql.getConnection();

		let [rows, fields] = await connection.query(`SELECT * FROM ?? WHERE ${colum} in (?)`, [this.DB_TABLE.PRIM, data]);
		var ret = [];

		for (var key in rows) {
			var temp = new this();
			temp.parseRow(rows[key]);
			ret.push(temp);
		}
		return ret;
	}

	public static async CheckUnique(colum: string, data: any) {
		let connection = await DBsql.getConnection();

		let [rows, fields] = await connection.query(`SELECT 1 FROM ?? WHERE ${colum} = ? LIMIT 1`, [this.DB_TABLE.PRIM, data]);
		return rows.length == 0;
	}

	public static cast(obj) {
		var obj = this.constructor();
		for (let i in obj) {
			obj[i] = obj[i];
		}
		return obj;
	}
}