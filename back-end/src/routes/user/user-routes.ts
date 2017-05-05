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

		router.post('/register', UserController.register);
		router.post('/login', requireLogin, UserController.login);

		router.post('', requireAuth, UserController.create);
		router.get('', requireAuth, UserController.read);
		router.put('', requireAuth, UserController.update);
		router.delete('', requireAuth, UserController.delete);

		return router;
	}
}