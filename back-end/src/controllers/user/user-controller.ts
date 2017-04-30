import { Request, Response, NextFunction } from 'express';

import * as jwt from 'jsonwebtoken';

import {IController} from '../icontroller';

import CONFIG from '../../config';

export class UserController implements IController {
  private generateToken(user): string {
    return jwt.sign(user, CONFIG.AUTH.SECRET, {expiresIn: 10080});
  }

  login(req: Request, res: Response, next: NextFunction) {}

  logout(req: Request, res: Response, next: NextFunction) {}

  public signup(req: Request, res: Response, next: NextFunction) {}

  public create() {}

  public read() {}

  public update() {}

  public delete () {}

  constructor() {}
}
