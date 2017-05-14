import { hasPermission } from './../user/permission';
import { UserRole } from '../user/user-role';
import { User } from '../user/user';
import { CRUDpermission } from '../user/permission';
import { CError } from "./error";
import { DBcrud, DBconn, DBopp } from './db';

export /*abstract*/ class SEntity implements hasPermission {

	static DB_TABLE = {
		PRIM: "",
		REL: {}
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

	public hasPermission(user: User, role: UserRole): CRUDpermission {
		return role.permissions[this.constructor.name].others;
	}

	public async getErrors(action: DBcrud): Promise<CError[]> {
		return [];
	}

	public static async ParceData(data: any[]): Promise<SEntity[]> {
		for (let i in data) {
			let tmp: SEntity = Object.assign(new this(), data[i]);
			data[i] = tmp;
		}
		return data;
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
		let conn = await DBconn.getConnection();

		for (var i in data) {
			var row = data[i].toRow();
			delete row.id;
			delete row.created_at;
			delete row.updated_at;

			let [rows, fields] = await conn.query(`UPDATE ?? SET ? where id = ?`, [this.DB_TABLE.PRIM, row]);
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
		let conn = await DBconn.getConnection();

		for (var i in data) {
			var row = data[i].toRow();
			delete row.id;
			delete row.created_at;
			delete row.updated_at;

			let [rows, fields] = await conn.query(`INSERT INTO ?? SET ?`, [this.DB_TABLE.PRIM, row]);
			data[i].id = rows.insertId;
		}

		return true;
	}

	/**
	 * delete the object data in the DB
	 * this.id must be same as the thing to be updated
	 * @param data an array of id's
	 * @return True if everything pass else false
	 */
	public static async Delete(data): Promise<boolean> {
		let conn = await DBconn.getConnection();
		let ids = [];

		for (var i in data) ids.push(data[i].id);

		let [rows, fields] = await conn.query(`DELETE FROM ?? WHERE id IN (?)`, [this.DB_TABLE.PRIM, ids]);
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
		let query = `SELECT * FROM ?? `;
		let data: [any] = [this.DB_TABLE.PRIM];

		if (feilds) {
			let operation = DBopp.OR == opp ? `OR` : `AND`;
			var i = 0, length = Object.keys(feilds).length;

			if (length > 0) query += ` WHERE `;

			for (var key in feilds) {
				data.push(key, feilds[key]);
				query += ` ?? IN (?) ${i++ == length ? operation : ""} `;
			}
		}

		query += ` LIMIT ? OFFSET ?`;
		data.push(
			limit ? limit : 1000,
			offset ? offset : 0
		);

		return { query: query, data: data };
	}

	public static async SelectQuery(query: string, data: [any]) {
		let conn = await DBconn.getConnection();

		let [rows, fields] = await conn.query(query, data);
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
		let conn = await DBconn.getConnection();

		let [rows, fields] = await conn.query(`SELECT 1 FROM ?? WHERE ?? IN (?) LIMIT 1`, [this.DB_TABLE.PRIM, colum, data]);
		return rows.length == 0;
	}
}