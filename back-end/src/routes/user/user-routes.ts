import {Router} from 'express';

import {UserController} from '../../controllers/user/user-controller';

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
    this.router.post('/register', this.userController.signup);
    this.router.post('/login', this.userController.login);
  }
}

// Create the UserRouter, and export its configured Express.Router
const userRoutes = new UserRouter();
userRoutes.init();

export default userRoutes.router;