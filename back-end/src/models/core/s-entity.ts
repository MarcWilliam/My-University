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
	public async update(): Promise<boolean> { return (<any>this.constructor).Update([this]); }

	/**
	 * update the object data in the DB
	 * this.id must be same as the thing to be updated
	 * 
	 * @return True if everything pass else false
	 */
	public static async Update(data): Promise<boolean> {
		let connection = await DBsql.getConnection();

		for (var i in data) {
			var row = data[i].toRow();
			delete row.id;
			delete row.created_at;
			delete row.updated_at;

			let [rows, fields] = await connection.query(`UPDATE ?? SET ? where id = ?`, [this.DB_TABLE.PRIM, row]);
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
	public async create(): Promise<boolean> { return (<any>this.constructor).Create([this]); }

	/**
	 * insert the object data in the DB
	 * this.id must 0
	 * this.id will be updated to the new id
	 * 
	 * @return True if everything pass else false
	 */
	public static async Create(data): Promise<boolean> {
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
	public static async Delete(data): Promise<boolean> {
		let connection = await DBsql.getConnection();
		for (var i in data) {
			let [rows, fields] = await connection.query(`DELETE FROM ?? WHERE id IN (?)`, [this.DB_TABLE.PRIM, data[i].id]);
		}
		return true;
	}

	/**
	 * delete the object data in the DB
	 * this.id must be same as the thing to be updated
	 * 
	 * @return True if everything pass else false
	 */
	public async delete(): Promise<boolean> { return (<any>this.constructor).Delete([this]); }

	private static _PaseReadQuery(feilds: {}, opp: DBopp = DBopp.AND, limit?: number, offset?: number): { query: string, data: [any] } {
		let query = `SELECT * FROM ?? WHERE `;
		let data: [any] = [this.DB_TABLE.PRIM];

		let operation = DBopp.OR == opp ? `OR` : `AND`;

		var i = 0, length = Object.keys(feilds).length;

		for (var key in feilds) {
			data.push(key, feilds[key]);
			query += ` ?? IN (?) ${i++ == length ? operation : ""} `;
		}

		query += ` LIMIT ? OFFSET ?`;
		data.push(
			limit ? limit : 1000,
			offset ? offset : 0
		);

		return { query: query, data: data };
	}

	public static async SelectQuery(query: string, data: [any]) {
		let connection = await DBsql.getConnection();

		let [rows, fields] = await connection.query(query, data);
		var ret = [];

		for (var key in rows) {
			var temp = new this();
			temp.parseRow(rows[key]);
			ret.push(temp);
		}
		return ret;
	}

	/**
	 * select the object data from the DB
	 * set this object data to the current
	 * 
	 * @return True if everything pass else false
	 */
	public static async Read(feilds: {}, opp: DBopp = DBopp.AND, limit?: number, offset?: number) {
		let parsed = this._PaseReadQuery(feilds, opp, limit, offset);
		return this.SelectQuery(parsed.query, parsed.data);
	}

	public static async CheckUnique(colum: string, data: any) {
		let connection = await DBsql.getConnection();

		let [rows, fields] = await connection.query(`SELECT 1 FROM ?? WHERE ?? IN (?) LIMIT 1`, [this.DB_TABLE.PRIM, colum, data]);
		return rows.length == 0;
	}
}

export enum DBopp { AND, OR }