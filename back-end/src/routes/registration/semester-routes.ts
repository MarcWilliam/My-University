import { Router, Request, Response, NextFunction } from 'express';

import authenticationPassport from '../../server/authentication-passport';
import { SemesterController } from '../../controllers/registration/semester-controller';

/**
 * @author Marc Wafik
 */
export class SemesterRouter {

	static CONTROLLER = SemesterController;

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