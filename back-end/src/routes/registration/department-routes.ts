import { Router, Request, Response, NextFunction } from 'express';

import authenticationPassport from '../../server/authentication-passport';
import { DepartmentController } from '../../controllers/registration/department-controller';

/**
 * @author Marc Wafik
 */
export class DepartmentRouter {

	static CONTROLLER = DepartmentController;

	/**
	 * Take each handler, and attach to one of the Express.Router's endpoints.
	 */
	public static init(): Router {
		var router = Router();
		let requireAuth = authenticationPassport.authenticate('jwt', { session: false }),
			requireLogin = authenticationPassport.authenticate('local', { session: false });

		router.post('/', requireAuth, this.CONTROLLER.Create.bind(this.CONTROLLER));
		router.get('/(:key=:value)?/', requireAuth, this.CONTROLLER.Read.bind(this.CONTROLLER));
		router.put('/', requireAuth, this.CONTROLLER.Update.bind(this.CONTROLLER));
		router.delete('/:ids/', requireAuth, this.CONTROLLER.Delete.bind(this.CONTROLLER));

		return router;
	}
}