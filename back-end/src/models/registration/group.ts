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
	startTime;
	durationTime;
	courseOfferingID: number;
	groupID: number;

	public parseRow(row) {
		super.parseRow(row);

		this.name = row.name;
		this.maxStudents = row.max_students;
		this.startTime = row.start_time;
		this.durationTime = row.duration_time;
		this.courseOfferingID = row.ourse_offering_id;
		this.groupID = row.group_id;
	}

	public toRow() {
		var row = super.toRow();

		row.name = this.name;
		row.max_students = this.maxStudents;
		row.start_time = this.startTime;
		row.duration_time = this.durationTime;
		row.course_offering_id = this.courseOfferingID;
		row.group_id = this.groupID;

		return row;
	}

}