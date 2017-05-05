import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';

import { User } from '../../models/user/user';
import CONFIG from '../../config';
import { UserRole } from '../../models/user/user-role';

export class UserController {

	private static generateToken(user): string {
		return jwt.sign(user, CONFIG.AUTH.SECRET, { expiresIn: 10080 });
	}

	public static async create(req: Request, res: Response, next: NextFunction) { }

	public static async read(req: Request, res: Response, next: NextFunction) { }

	public static async update(req: Request, res: Response, next: NextFunction) { }

	public static async delete(req: Request, res: Response, next: NextFunction) { }

	public static async register(req: Request, res: Response, next: NextFunction) {
		let user: User = Object.assign(new User(), req.body);

		if (await user.isValid() && await user.create()) {
			delete user.password;
			res.status(201).json({
				token: 'Bearer ' + UserController.generateToken(user),
				user: user
			});
		} else {
			return false;
		}
	}

	public static async login(req: Request, res: Response, next: NextFunction) {
		delete req.user.password;

		res.status(200)
			.json({
				token: 'Bearer ' + UserController.generateToken(req.user),
				user: req.user
			});
	}

	public static async logout(req: Request, res: Response, next: NextFunction) { }

}
