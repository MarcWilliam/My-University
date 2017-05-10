import * as BCrypt from 'bcrypt';

import { SEntity } from '../core/s-entity';
import { NotificationObserver } from '../core/notification';
import { Permission, hasPermission } from '../user/permission';
import { DBsql } from '../core/db-sql';
import CONFIG from '../../config';

/**
 * hold the Semester data and handels CRUD
 * @author Marc Wafik
 */
export class Semester extends SEntity implements hasPermission {

	static DB_TABLE = {
		PRIM: CONFIG.DB.TABLE_PREFIX + "semester",
		RELATIONAL: {}
	};


	year: number;
	name: String;
	maxCreditHour: number;
	startDate: Date;
	endDate: Date;
	registrationStartDate: Date;
	registrationEndDate: Date;
	departmentID: number;


	public parseRow(row) {
		super.parseRow(row);

		this.year = row.year;
		this.name = row.name;
		this.maxCreditHour = row.max_credit_hour;
		this.startDate = row.start_date;
		this.endDate = row.end_date;
		this.registrationStartDate = row.registration_start_date;
		this.registrationEndDate = row.registration_end_date;
		this.departmentID = row.department_id;
	}

	public toRow() {
		var row = super.toRow();
		
		row.year = this.year;
		row.name = this.name;
		row.max_credit_hour = this.maxCreditHour;
		row.start_date = this.startDate;
		row.end_date = this.endDate;
		row.registration_start_date = this.registrationStartDate;
		row.registration_end_date = this.registrationEndDate;
		row.department_id = this.departmentID;

		return row;
	}

}