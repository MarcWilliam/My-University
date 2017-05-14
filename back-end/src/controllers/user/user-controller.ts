import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';

import CONFIG from '../../config';
import { User } from '../../models/user/user';
import { UserRole } from '../../models/user/user-role';
import { CRUDController } from '../core/crud-controller';

/**
 * @author Abdelrahman Abdelhamed
 */
export class UserController extends CRUDController {

	static MODEL = User;

	private static _GenerateToken(user): string {
		return jwt.sign(user, CONFIG.AUTH.SECRET, { expiresIn: 10080 });
	}

	public static async Register(req: Request, res: Response, next: NextFunction) {
		let user: User = Object.assign(new User(), req.body);

		if (await user.isValid() && await user.create()) {
			delete user.password;
			res.status(201).json({
				token: 'Bearer ' + UserController._GenerateToken(user),
				user: user
			});
		} else {
			return false;
		}
	}

	public static async Login(req: Request, res: Response, next: NextFunction) {
		delete req.user.password;

		res.status(200).json({
			token: 'Bearer ' + UserController._GenerateToken(req.user),
			user: req.user
		});
	}

	public static async Logout(req: Request, res: Response, next: NextFunction) {

	}

}
