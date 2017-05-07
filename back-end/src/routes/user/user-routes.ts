import { Router, Request, Response, NextFunction } from 'express';

import { UserController } from '../../controllers/user/user-controller';
import authenticationPassport from '../../server/authentication-passport';

export class UserRouter {

	static CONTROLLER = UserController;

	/**
	 * Take each handler, and attach to one of the Express.Router's endpoints.
	 */
	public static init(): Router {
		var router = Router();
		let requireAuth = authenticationPassport.authenticate('jwt', { session: false }),
			requireLogin = authenticationPassport.authenticate('local', { session: false });

		router.post('/register/', this.CONTROLLER.Register.bind(this.CONTROLLER));
		router.post('/login/', requireLogin, this.CONTROLLER.Login.bind(this.CONTROLLER));
		router.post('/logout/', requireAuth, this.CONTROLLER.Logout.bind(this.CONTROLLER));

		router.post('/', requireAuth, this.CONTROLLER.Create.bind(this.CONTROLLER));
		router.get('/(:key=:value)?/', requireAuth, this.CONTROLLER.Read.bind(this.CONTROLLER));
		router.put('/', requireAuth, this.CONTROLLER.Update.bind(this.CONTROLLER));
		router.delete('/:ids/', requireAuth, this.CONTROLLER.Delete.bind(this.CONTROLLER));

		router.get('/test/(:key=:value)?/', (req: Request, res: Response, next: NextFunction) => res.json({ params: req.params, query: req.query }));

		return router;
	}
}