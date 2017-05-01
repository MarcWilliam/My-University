import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';
import { IController } from '../icontroller';

import { User } from '../../models/user/user';

import CONFIG from '../../config';

export class UserController implements IController {
	public user: User;

	constructor() { this.user = new User(); }

	private generateToken(user): string {
		return jwt.sign(user, CONFIG.AUTH.SECRET, { expiresIn: 10080 });
	}

	login = (req: Request, res: Response, next: NextFunction) => { }

	logout = (req: Request, res: Response, next: NextFunction) => { }

	signup =
	async (req: Request, res: Response, next: NextFunction) => {
		let user: User = Object.assign(new User(), req.body);

		if (user.isValid()) {
			let t = await user.create();

			res.status(201)
				.json({ token: 'JWT ' + this.generateToken(user), user: user });
		} else {
			return false;
		}
	}

	public create() { }

	public read() { }

	public update() { }

	public delete() { }
}
