import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';

import { User } from '../../models/user/user';

import CONFIG from '../../config';
import { UserRole } from '../../models/user/user-role';

export class UserRoleController {

	public static async Create(req: Request, res: Response, next: NextFunction) {

	}

	public static async Read(req: Request, res: Response, next: NextFunction) {

	}

	public static async Update(req: Request, res: Response, next: NextFunction) {

	}

	public static async Delete(req: Request, res: Response, next: NextFunction) {

	}

}