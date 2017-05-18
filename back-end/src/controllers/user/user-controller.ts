import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';

import CONFIG from '../../config';
import { User } from '../../models/user/user';
import { UserRole } from '../../models/user/user-role';
import { CRUDController } from '../core/crud-controller';
import { DBcrud } from '../../models/core/db';
import { HTTPstat } from '../core/http-stats';
import { EmailHandler } from './../../models/core/email-handler';
import { EmailTemplaites } from './../../models/core/email-templaites';

/**
 * @author Abdelrahman Abdelhamed
 */
export class UserController extends CRUDController {

	static MODEL = User;

	private static _GenerateToken(user): string {
		return jwt.sign(user, CONFIG.AUTH.SECRET, { expiresIn: "7d" });
	}

	public static async Register(req: Request, res: Response, next: NextFunction) {
		let user = <User>(await this.MODEL.ParceData([req.body]))[0];

		let errors = (await user.getErrors(DBcrud.CREATE));

		if (errors.length == 0) {
			EmailHandler.sendMail(EmailTemplaites.SigunUp({ userEmail: user.email, userName: user.name }));
			(await user.create());
			delete user.password;
			req.userRole = <UserRole>(await UserRole.Read({ id: req.user.userRoleID }))[0];
			res.status(HTTPstat.Success.Created).json({
				token: UserController._GenerateToken(user),
				user: user,
				UserRole: req.userRole
			});
		} else {
			res.json({
				error: {
					code: HTTPstat.ClientErr.UnprocessableEntity,
					message: "didn't pass the validation"
				},
				notValid: errors
			});
		}
		next();
	}

	public static async Login(req: Request, res: Response, next: NextFunction) {
		delete req.user.password;
		req.userRole = <UserRole>(await UserRole.Read({ id: req.user.userRoleID }))[0];
		res.status(HTTPstat.Success.OK).json({
			token: UserController._GenerateToken(req.user),
			user: req.user,
			UserRole: req.userRole
		});
		next();
	}

	public static async Logout(req: Request, res: Response, next: NextFunction) {
		next();
	}

}
