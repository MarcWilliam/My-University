import { Router } from 'express';

import { UserController } from '../../controllers/user/user-controller';
import authenticationPassport from '../../server/authentication-passport';

export class UserRouter {

	/**
	 * Take each handler, and attach to one of the Express.Router's
	 * endpoints.
	 */
	public static init(): Router {
		var router = Router();
		let requireAuth = authenticationPassport.authenticate('jwt', { session: false }),
			requireLogin = authenticationPassport.authenticate('local', { session: false });

		router.post('/register', UserController.Register);
		router.post('/login', requireLogin, UserController.Login);

		router.post('', requireAuth, UserController.Create);
		router.get('', requireAuth, UserController.Read);
		router.put('', requireAuth, UserController.Update);
		router.delete('', requireAuth, UserController.Delete);

		return router;
	}
}