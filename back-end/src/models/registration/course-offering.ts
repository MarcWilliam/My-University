import { SEntity } from '../core/s-entity';
import { DBcrud, DBconn, DBopp } from '../core/db';
import CONFIG from '../../config';

/**
 * a passive representation of a course offerings
 * @author Marc Wafik
 */
export class CourseOffering extends SEntity {

	static DB_TABLE = {
		PRIM: CONFIG.DB.TABLE_PREFIX + "course_offering",
		REL: { STAFF: "course_offering_staff" }
	};


	courseID: number;
	semesterID: number;
	staffIDs: number[];

	public parseRow(row) {
		super.parseRow(row);

		row.course_id = this.courseID;
		row.semester_id = this.semesterID;
	}

	public toRow() {
		var row = super.toRow();

		row.Course_id = this.courseID;
		row.Semester_id = this.semesterID;

		return row;
	}

	public static async Create(data): Promise<boolean> {
		let conn = (await DBconn.getConnection());
		(await super.Create(data));

		for (var i in data) {
			for (var j in data[i].staffIDs) {
				let [rows, fields] = await conn.query(`INSERT INTO ?? SET ?`,
					[this.DB_TABLE.REL.STAFF, { 'course_offering_id': data[i].id, 'user_id': data[i].staffIDs[i] }]);
			}
		}

		return true;
	}

	public static async Delete(data): Promise<boolean> {
		let conn = (await DBconn.getConnection());
		for (var i in <CourseOffering>data) {
			let [rows, fields] = (await conn.query(`DELETE FROM ?? WHERE ?? IN (?)`,
				[this.DB_TABLE.REL.STAFF, { 'course_offering_id': data[i].id }]));
		}
		(await super.Delete(data));
		return true;
	}

	public static async Update(data): Promise<boolean> {
		let conn = (await DBconn.getConnection());
		await super.Update(data);

		for (var i in data) {
			// delete all the prerequisites b4 insrting new ones
			let [rows, fields] = (await conn.query(`DELETE FROM ?? WHERE ?? IN (?)`,
				[this.DB_TABLE.REL.STAFF, { 'course_offering_id': data[i].id }]));

			for (var j in data[i].staffIDs) {
				let [rows, fields] = (await conn.query(`INSERT INTO ?? SET ?`,
					[this.DB_TABLE.REL.STAFF, { 'course_offering_id': data[i].id, 'user_id': data[i].staffIDs[i] }]));
			}
		}

		return true;
	}

	public static async Read(feilds: {}, opp: DBopp = DBopp.AND, limit?: number, offset?: number) {
		let conn = (await DBconn.getConnection());
		var data = (await super.Read(feilds, opp, limit, offset));

		for (var i in data) {
			let [rows, fields] = (await conn.query(`SELECT ?? FROM ?? WHERE ?? IN (?) LIMIT 1`,
				['user_id', this.DB_TABLE.REL.STAFF, 'course_offering_id', data[i].id]));
			data[i].staffIDs = [];

			for (var j in rows) {
				data[i].staffIDs.push(rows[i].user_id);
			}
		}
		return data;
	}
}