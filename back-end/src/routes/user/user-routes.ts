import { Router, Request, Response, NextFunction } from 'express';

import { UserController } from '../../controllers/user/user-controller';
import authenticationPassport from '../../server/authentication-passport';

export class UserRouter {

	/**
	 * Take each handler, and attach to one of the Express.Router's endpoints.
	 */
	public static init(): Router {
		var router = Router();
		let requireAuth = authenticationPassport.authenticate('jwt', { session: false }),
			requireLogin = authenticationPassport.authenticate('local', { session: false });

		router.post('/register/', UserController.Register);
		router.post('/login/', requireLogin, UserController.Login);
		router.post('/logout/', requireAuth, UserController.Logout);

		router.post('/', requireAuth, UserController.Create);
		router.get('/(:key=:value)?/', UserController.Read);
		router.put('/', requireAuth, UserController.Update);
		router.delete('/:ids/', requireAuth, UserController.Delete);

		router.get('/test/(:key=:value)?/', (req: Request, res: Response, next: NextFunction) => res.json({ params: req.params, query: req.query }));

		return router;
	}
}