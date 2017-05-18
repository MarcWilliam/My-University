import { hasPermission } from './../user/permission';
import { UserRole } from '../user/user-role';
import { User } from '../user/user';
import { CRUDpermission } from '../user/permission';
import { CError, CErrorCode } from './error';
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

		// this.id = row.id;
		// row.created_at = this.createdAt;
		// row.updated_at = this.updatedAt;

		return row;
	}

	/**
	 * check if the user has permission to update that object
	 * @param user used to check if the user own the object ( not implemented on all ... only on case by case basis )
	 * @param role 
	 */
	public hasPermission(user: User, role: UserRole): CRUDpermission {
		return role.permissions[this.constructor.name].others;
	}

	/**
	 * 
	 * @param action
	 * @return an array of errors if any errors found else return an empty array
	 */
	public async getErrors(action: DBcrud): Promise<CError[]> {
		return [];
	}

	/**
	 * 
	 * @param data an array of data to be parsed to this class
	 * @return an array of that objects from this class
	 */
	public static async ParceData(data: any[]): Promise<SEntity[]> {
		var ret = [];
		for (let i in data) {
			let tmp: SEntity = Object.assign(new this(), data[i]);
			ret[i] = tmp;
		}
		return ret;
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
		let conn = (await DBconn.getConnection());

		for (var i in data) {
			var row = data[i].toRow();

			let [rows, fields] = (await conn.query(`UPDATE ?? SET ? where ?? = ?`, [this.DB_TABLE.PRIM, row, "id", data[i].id]));
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
	 * @param data an array of objects from this class to be created
	 * @return True if everything pass else false
	 */
	public static async Create(data): Promise<boolean> {
		let conn = (await DBconn.getConnection());

		for (var i in data) {
			var row = data[i].toRow();

			let [rows, fields] = (await conn.query(`INSERT INTO ?? SET ?`, [this.DB_TABLE.PRIM, row]));
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
		let conn = (await DBconn.getConnection());
		let ids = [];

		for (var i in data) ids.push(data[i].id);

		let [rows, fields] = (await conn.query(`DELETE FROM ?? WHERE ?? IN (?)`, [this.DB_TABLE.PRIM, "id", ids]));
		return true;
	}

	/**
	 * delete the object data in the DB
	 * this.id must be same as the thing to be updated
	 * 
	 * @return True if everything pass else false
	 */
	public async delete(): Promise<boolean> { return (<any>this.constructor).Delete([this]); }

	/**
	 * parse the db read query
	 * @param feilds key value pair of  key in ( array of value )
	 * @param opp the operation to be don ebettern the feilds ( AND , OR )
	 * @param limit max row lenth default 1000
	 * @param offset the start indedx default 0
	 * @return the query and it's data bindings
	 */
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

	/**
	 * run a select query then parse the result to an array can be used for search or read
	 * @param query the db query ex: ( SELECT * from ?? )
	 * @param data the data to be bound to the query
	 */
	public static async SelectQuery(query: string, data: [any]) {
		let conn = (await DBconn.getConnection());

		let [rows, fields] = (await conn.query(query, data));
		var ret = [];

		for (var key in rows) {
			var temp = new this();
			temp.parseRow(rows[key]);
			ret.push(temp);
		}
		return ret;
	}

	/**
	 * 
	 * @param feilds key value pair of  key in ( array of value )
	 * @param opp the operation to be don ebettern the feilds ( AND , OR )
	 * @param limit max row lenth default 1000
	 * @param offset the start indedx default 0
	 * @return and array of objects from this class
	 */
	public static async Read(feilds?: {}, opp: DBopp = DBopp.AND, limit?: number, offset?: number) {
		let parsed = this._PaseReadQuery(feilds, opp, limit, offset);
		return this.SelectQuery(parsed.query, parsed.data);
	}

	/**
	 * 
	 * @param feilds an array of keys
	 * @param search the value   %  will be added to the start and end
	 * @param limit max row lenth default 1000
	 * @param offset the start indedx default 0
	 * @return and array of objects from this class
	 */
	public static Search(feilds: any[], search: string, limit?: number, offset?: number) {
		return this.SelectQuery(`SELECT * FROM ?? WHERE CONCAT_WS('', ??) LIKE ? LIMIT ? OFFSET ?`,
			[this.DB_TABLE.PRIM, feilds, `%${search}%`, limit ? limit : 1000, offset ? offset : 0]);
	}

	/**
	 * check if the key / value exists in db
	 * @param colum 
	 * @param data 
	 * @return they id of the row if found or null if not found
	 */
	public static async CheckUnique(colum: string, data: any) {
		let conn = (await DBconn.getConnection());

		let [rows, fields] = (await conn.query(`SELECT ?? FROM ?? WHERE ?? IN (?) LIMIT 1`, ["id", this.DB_TABLE.PRIM, colum, data]));
		return rows[0] ? rows[0] : null;
	}

	/**
	 * parse errors from unique key already exists
	 * @param uniquenessID 
	 */
	public parseUniquenessErrors(uniquenessID: {}) {
		var errs: CError[] = [];
		for (var key in uniquenessID) {

			var element = uniquenessID[key];
			(uniquenessID[key] || uniquenessID[key] != this.id) ? errs.push({
				param: key,
				msg: `${key} already taken`,
				value: this[key],
				errCode: CErrorCode.notUnique,
			}) : 0;
		}
		return errs;
	}
}