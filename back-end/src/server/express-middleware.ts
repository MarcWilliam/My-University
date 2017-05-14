import { Request, Response, NextFunction } from 'express';
import { UserRole } from '../models/user/user-role';

/**
 * @author Marc Wafik
 */
export class ExpressMiddleware {
	public static async UserRole(req: Request, res: Response, next: NextFunction) {
		req.userRole = <UserRole>await (UserRole.Read({ id: req.user.userRoleID }))[0];
		next();
	}
}