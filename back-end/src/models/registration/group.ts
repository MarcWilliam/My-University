import * as BCrypt from 'bcrypt';

import { SEntity } from '../core/s-entity';
import { NotificationObserver } from '../core/notification';
import { Permission, hasPermission } from '../user/permission';
import CONFIG from '../../config';

/**
 * hold the Semester data and handels CRUD
 * @author Marc Wafik
 */
export class Group extends SEntity implements hasPermission {

	static DB_TABLE = {
		PRIM: CONFIG.DB.TABLE_PREFIX + "group",
		REL: {}
	};

	name: String;
	maxStudents: number;
	slot: number;
	dayOfWeek: number;
	courseOfferingID: number;
	groupID: number;

	public parseRow(row) {
		super.parseRow(row);

		this.name = row.name;
		this.maxStudents = row.max_students;
		this.slot = row.slot;
		this.dayOfWeek = row.day_of_week;
		this.courseOfferingID = row.ourse_offering_id;
		this.groupID = row.group_id;
	}

	public toRow() {
		var row = super.toRow();

		row.name = this.name;
		row.max_students = this.maxStudents;
		row.slot = this.slot;
		row.day_of_week = this.dayOfWeek;
		row.course_offering_id = this.courseOfferingID;
		row.group_id = this.groupID;

		return row;
	}

}