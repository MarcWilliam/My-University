import { Router } from 'express';

import { UserController } from '../../controllers/user/user-controller';

import authenticationPassport from '../../server/authentication-passport';

export class UserRouter {
	private userController: UserController;
	router: Router;

	/**
	* Initialize the UserRouter
	*/
	constructor() {
		this.userController = new UserController();
		this.router = Router();
		this.init();
	}

	/**
	 * Take each handler, and attach to one of the Express.Router's
	 * endpoints.
	 */
	init() {
		let requireAuth = authenticationPassport.authenticate('jwt', { session: false }),
			requireLogin = authenticationPassport.authenticate('local', { session: false });

		this.router.post('/register', this.userController.signup);
		this.router.post('/login', requireLogin, this.userController.login);
		this.router.post('/test', requireAuth, this.userController.roleAuthorization(['admin']), function (req, res, next) { console.log(req.body) });
	}
}

// Create the UserRouter, and export its configured Express.Router
const userRoutes = new UserRouter().router;
export default userRoutes;