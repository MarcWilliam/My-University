import { Router, Request, Response, NextFunction } from 'express';

import { CRUDRouter } from './crud-router';
import { DepartmentController } from '../controllers/registration/department-controller';
import { CourseController } from '../controllers/registration/course-controller';
import { CourseOfferingController } from './../controllers/registration/course-offering-controller';
import { SemesterController } from '../controllers/registration/semester-controller';
import { GroupController } from '../controllers/registration/group-controller';
import { CourseOfferingEnrollmentController } from '../controllers/registration/course-offering-controller-enrollment';

/**
 * @author Marc Wafik
 */

export class DepartmentRouter extends CRUDRouter {

	static CONTROLLER = DepartmentController;
}

export class SemesterRouter extends CRUDRouter {

	static CONTROLLER = SemesterController;
}

export class CourseRouter extends CRUDRouter {

	static CONTROLLER = CourseController;
}

export class CourseOfferingRouter extends CRUDRouter {

	static CONTROLLER = CourseOfferingController;
}

export class CourseOfferingEnrollmentRouter extends CRUDRouter {

	static CONTROLLER = CourseOfferingEnrollmentController;
}

export class GroupRouter extends CRUDRouter {

	static CONTROLLER = GroupController;
}
