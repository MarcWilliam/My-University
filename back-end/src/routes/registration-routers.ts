import { Router, Request, Response, NextFunction } from 'express';

import { CRUDRouter } from './crud-router';
import { DepartmentController } from '../controllers/registration/department-controller';
import { CourseController } from '../controllers/registration/course-controller';
import { SemesterController } from '../controllers/registration/semester-controller';

/**
 * @author Marc Wafik
 */

export class DepartmentRouter extends CRUDRouter {

	static CONTROLLER = DepartmentController;
}

export class CourseRouter extends CRUDRouter {

	static CONTROLLER = CourseController;
}

export class SemesterRouter extends CRUDRouter {

	static CONTROLLER = SemesterController;

}
