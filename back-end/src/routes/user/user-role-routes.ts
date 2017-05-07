import { Router, Request, Response, NextFunction } from 'express';

import { UserController } from '../../controllers/user/user-controller';
import authenticationPassport from '../../server/authentication-passport';

export class UserRoleRouter {

	/**
	 * Take each handler, and attach to one of the Express.Router's endpoints.
	 */
	public static init(): Router {
		var router = Router();
		let requireAuth = authenticationPassport.authenticate('jwt', { session: false }),
			requireLogin = authenticationPassport.authenticate('local', { session: false });

		router.post('/', requireAuth, UserController.Create);
		router.get('/(:key=:value)?/', UserController.Read);
		router.put('/', requireAuth, UserController.Update);
		router.delete('/:ids/', requireAuth, UserController.Delete);

		return router;
	}
}