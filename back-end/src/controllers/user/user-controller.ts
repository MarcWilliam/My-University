import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';
import { IController } from '../icontroller';

import { User } from '../../models/user/user';

import CONFIG from '../../config';
import { UserRole } from '../../models/user/user-role';

export class UserController implements IController {
	public user: User;

	constructor() { this.user = new User(); }

	private generateToken(user): string {
		return jwt.sign(user, CONFIG.AUTH.SECRET, { expiresIn: 10080 });
	}

	public async login(req: Request, res: Response, next: NextFunction) {
		delete req.user.password;
		delete req.user.created_at;
		delete req.user.updated_at;

		res.status(200).json({
			token: 'Bearer ' + this.generateToken(req.user),
			user: req.user
		});
	}

	public async logout(req: Request, res: Response, next: NextFunction) { }

	public async signup(req: Request, res: Response, next: NextFunction) {
		let user: User = Object.assign(new User(), req.body);

		if (user.isValid() && await User.create([user])) {
			delete user.password;
			res.status(201).json({
				token: 'Bearer ' + this.generateToken(user),
				user: user
			});
		} else {
			return false;
		}
	}

	public create() { }

	public async read(primaryKey: any) {
		let colum: string = Object.keys(primaryKey)[0];
		let data: any = primaryKey[colum];

		let user = await User.read(colum, data);
		return user;
	}

	public update() { }

	public delete() { }

	public roleAuthorization(roles) {

		return async (req: Request, res: Response, next: NextFunction) => {

			let result = await this.read({ 'id': req.user.id });
			let user = result[0];

			if (user) {
				if (roles.indexOf(user.role) > -1) {
					return next();
				}
			} else {
				res.status(422).json({ error: 'No user found.' });
				return next('No user found.');
			}

			res.status(401).json({ error: 'You are not authorized to view this content' });
			return next('Unauthorized');

		}
	}

}
