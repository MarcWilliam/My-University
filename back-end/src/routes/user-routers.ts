import { CRUDRouter } from './crud-router';
import { Router, Request, Response, NextFunction } from 'express';

import { UserController } from '../controllers/user/user-controller';
import { PassportAut } from '../server/authentication-passport';
import { UserRoleController } from '../controllers/user/user-role-controller';
import { ExpressMiddleware } from '../server/express-middleware';

/**
 * @author Abdelrahman Abdelhamed
 */

export class UserRouter extends CRUDRouter {

	static CONTROLLER = UserController;

	/**
	 * Take each handler, and attach to one of the Express.Router's endpoints.
	 */
	public static Router(): Router {

		var router = super.Router();
		let requireAuth = PassportAut.AuthenticateJWT,
			requireLogin = PassportAut.AuthenticateLocal;

		router.post('/register/', this.CONTROLLER.Register.bind(this.CONTROLLER));
		router.post('/login/', requireLogin, this.CONTROLLER.Login.bind(this.CONTROLLER));
		router.post('/logout/', requireAuth, ExpressMiddleware.UserRole, this.CONTROLLER.Logout.bind(this.CONTROLLER));

		return router;
	}
}

export class UserRoleRouter extends CRUDRouter {

	static CONTROLLER = UserRoleController;
}
