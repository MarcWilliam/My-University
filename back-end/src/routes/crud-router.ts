import { Router, Request, Response, NextFunction } from 'express';

import { PassportAuth } from '../middleware/authentication-passport';
import { CRUDController } from './../controllers/core/crud-controller';
import { ExpressMiddleware } from '../middleware/express-middleware';

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

		router.post('/',
			PassportAuth.AuthenticateJWT, ExpressMiddleware.UserRole,
			this.CONTROLLER.Create.bind(this.CONTROLLER)
		);
		router.get('(/:key=:value)?(/.:type)?',
			PassportAuth.AuthenticateJWT, ExpressMiddleware.UserRole,
			this.CONTROLLER.Read.bind(this.CONTROLLER)
		);
		router.get('/search/:keys=:value(/.:type)?',
			PassportAuth.AuthenticateJWT, ExpressMiddleware.UserRole,
			this.CONTROLLER.Search.bind(this.CONTROLLER)
		);
		router.put('/',
			PassportAuth.AuthenticateJWT, ExpressMiddleware.UserRole,
			this.CONTROLLER.Update.bind(this.CONTROLLER)
		);
		router.delete('/:ids',
			PassportAuth.AuthenticateJWT, ExpressMiddleware.UserRole,
			this.CONTROLLER.Delete.bind(this.CONTROLLER)
		);

		return router;
	}
}