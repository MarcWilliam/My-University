import { Router, Request, Response, NextFunction } from 'express';

import { CRUDRouter } from './../core/crud-router';
import authenticationPassport from '../../server/authentication-passport';
import { DepartmentController } from '../../controllers/registration/department-controller';

/**
 * @author Marc Wafik
 */
export class DepartmentRouter extends CRUDRouter {

	static CONTROLLER = DepartmentController;
}