import { Router, Request, Response, NextFunction } from 'express';

import { PassportAut } from '../server/authentication-passport';
import { CRUDController } from './../controllers/core/crud-controller';

/**
 * @author Marc Wafik
 */
export class CRUDRouter {

	static CONTROLLER = CRUDController;

	/**
	 * Take each handler, and attach to one of the Express.Router's endpoints.
	 */
	public static Router(): Router {
		var router = Router();
		let requireAuth = PassportAut.AuthenticateJWT,
			requireLogin = PassportAut.AuthenticateLocal;

		router.post('/', requireAuth, this.CONTROLLER.Create.bind(this.CONTROLLER));
		router.get('/(:key=:value)?/', requireAuth, this.CONTROLLER.Read.bind(this.CONTROLLER));
		router.put('/', requireAuth, this.CONTROLLER.Update.bind(this.CONTROLLER));
		router.delete('/:ids/', requireAuth, this.CONTROLLER.Delete.bind(this.CONTROLLER));

		return router;
	}
}