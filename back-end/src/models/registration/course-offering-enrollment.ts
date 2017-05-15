import * as BCrypt from 'bcrypt';

import { SEntity } from '../core/s-entity';
import { NotificationObserver } from '../core/notification';
import { Permission, hasPermission } from '../user/permission';
import CONFIG from '../../config';

/**
 * hold the Semester data and handels CRUD
 * @author Marc Wafik
 */
export class CourseOfferingEnrollment extends SEntity implements hasPermission {

	static DB_TABLE = {
		PRIM: CONFIG.DB.TABLE_PREFIX + "course_offering_enrollment",
		REL: {}
	};

	courseOfferingID;
	groupID;
	sectionID;
	totalGrade;
	letterGrade;
	userID;
	semesterID;

	public parseRow(row) {
		super.parseRow(row);

		this.courseOfferingID = row.course_offering_id;
		this.groupID = row.group_id;
		this.sectionID = row.section_id;
		this.totalGrade = row.total_grade;
		this.letterGrade = row.letter_grade;
		this.userID = row.user_id;
		this.semesterID = row.semester_id;
	}

	public toRow() {
		var row = super.toRow();

		row.course_offering_id = this.courseOfferingID;
		row.group_id = this.groupID;
		row.section_id = this.sectionID;
		row.total_grade = this.totalGrade;
		row.letter_grade = this.letterGrade;
		row.user_id = this.userID;
		row.semester_id = this.semesterID;

		return row;
	}

}