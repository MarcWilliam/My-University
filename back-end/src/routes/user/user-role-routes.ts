import { Router, Request, Response, NextFunction } from 'express';

import authenticationPassport from '../../server/authentication-passport';
import { UserRoleController } from '../../controllers/user/user-role-controller';
import { CRUDRouter } from '../core/crud-router';

/**
 * @author Marc Wafik
 */
export class UserRoleRouter extends CRUDRouter {

	static CONTROLLER = UserRoleController;

}