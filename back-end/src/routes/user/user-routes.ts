import { CRUDRouter } from './../core/crud-router';
import { Router, Request, Response, NextFunction } from 'express';

import { UserController } from '../../controllers/user/user-controller';
import authenticationPassport from '../../server/authentication-passport';

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
		let requireAuth = authenticationPassport.authenticate('jwt', { session: false }),
			requireLogin = authenticationPassport.authenticate('local', { session: false });

		router.post('/register/', this.CONTROLLER.Register.bind(this.CONTROLLER));
		router.post('/login/', requireLogin, this.CONTROLLER.Login.bind(this.CONTROLLER));
		router.post('/logout/', requireAuth, this.CONTROLLER.Logout.bind(this.CONTROLLER));

		return router;
	}
}