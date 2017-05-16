import { SEntity } from '../core/s-entity';
import { DBcrud, DBconn, DBopp } from '../core/db';
import CONFIG from '../../config';
import { CError } from '../core/error';

/**
 * a passive representation of a course
 * @author Marc Wafik
 */
export class Course extends SEntity {

	static DB_TABLE = {
		PRIM: CONFIG.DB.TABLE_PREFIX + "course",
		REL: { PREREQUISITE: CONFIG.DB.TABLE_PREFIX + "prerequisite" }
	};

	name: string;
	code: string;
	description: string;
	creditHours: number;
	level: number;
	departmentID: number;
	prerequisitesIDs: number[];

	public parseRow(row) {
		super.parseRow(row);

		this.name = row.name;
		this.code = row.code;
		this.description = row.description;
		this.creditHours = row.credit_hours;
		this.level = row.level;
		this.departmentID = row.department_id;
		this.prerequisitesIDs = [];
	}

	public toRow() {
		var row = super.toRow();

		row.name = this.name;
		row.code = this.code;
		row.description = this.description;
		row.credit_hours = this.creditHours;
		row.level = this.level;
		row.department_id = this.departmentID;

		return row;
	}

	public async getErrors(action: DBcrud): Promise<CError[]> {
		var errs: CError[] = (await super.getErrors(action));

		var uniqueErrs = this.parseUniquenessErrors({
			email: (await (<any>this.constructor).CheckUnique('code', this.code))
		});

		errs.concat(uniqueErrs);

		// check prerequisites exists
		return errs;
	}

	public static async Create(data): Promise<boolean> {
		let conn = (await DBconn.getConnection());
		(await super.Create(data));

		for (var i in <Course>data) {
			for (var j in data[i].prerequisitesIDs) {
				let [rows, fields] = (await conn.query(`INSERT INTO ?? SET ?`,
					[this.DB_TABLE.REL.PREREQUISITE, { 'course_id': data[i].id, 'prerequisite_id': data[i].prerequisitesIDs[i] }]));
			}
		}

		return true;
	}

	public static async Delete(data): Promise<boolean> {
		let conn = (await DBconn.getConnection());
		for (var i in <Course>data) {
			let [rows, fields] = (await conn.query(`DELETE FROM ?? WHERE ?? IN (?) OR ?? IN (?)`,
				[this.DB_TABLE.REL.PREREQUISITE, 'prerequisite_id', data[i].id, 'course_id', data[i].id]));
		}
		(await super.Delete(data));
		return true;
	}

	public static async Update(data): Promise<boolean> {
		let conn = (await DBconn.getConnection());
		(await super.Update(data));

		for (var i in <Course[]>data) {
			// delete all the prerequisites b4 insrting new ones
			let [rows, fields] = (await conn.query(`DELETE FROM ?? WHERE ?? IN (?)`,
				[this.DB_TABLE.REL.PREREQUISITE, 'course_id', data[i].id]));

			for (var j in data[i].prerequisitesIDs) {
				let [rows, fields] = (await conn.query(`INSERT INTO ?? SET ?`,
					[this.DB_TABLE.REL.PREREQUISITE, { 'course_id': data[i].id, 'prerequisite_id': data[i].prerequisitesIDs[i] }]));
			}
		}

		return true;
	}

	public static async Read(feilds: {}, opp: DBopp = DBopp.AND, limit?: number, offset?: number) {
		let conn = (await DBconn.getConnection());
		var data = (await super.Read(feilds, opp, limit, offset));

		for (var i in <Course[]>data) {
			let [rows, fields] = (await conn.query(`SELECT ?? FROM ?? WHERE ?? IN (?) LIMIT 1`,
				['prerequisite_id', this.DB_TABLE.REL.PREREQUISITE, 'course_id', data[i].id]));
			data[i].prerequisitesIDs = [];

			for (var j in rows) {
				data[i].prerequisitesIDs.push(rows[i].prerequisite_id);
			}
		}
		return data;
	}
}