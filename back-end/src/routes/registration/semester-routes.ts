import { Router, Request, Response, NextFunction } from 'express';

import authenticationPassport from '../../server/authentication-passport';
import { SemesterController } from '../../controllers/registration/semester-controller';
import { CRUDRouter } from '../core/crud-router';

/**
 * @author Marc Wafik
 */
export class SemesterRouter extends CRUDRouter {

	static CONTROLLER = SemesterController;

}