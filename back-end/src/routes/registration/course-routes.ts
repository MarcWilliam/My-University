import { Router, Request, Response, NextFunction } from 'express';

import { CRUDRouter } from './../core/crud-router';
import authenticationPassport from '../../server/authentication-passport';
import { CourseController } from '../../controllers/registration/course-controller';

/**
 * @author Marc Wafik
 */
export class CourseRouter extends CRUDRouter {

	static CONTROLLER = CourseController;
}