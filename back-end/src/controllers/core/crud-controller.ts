import { SEntity } from './../../models/core/s-entity';
import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';
import CONFIG from '../../config';

import { User } from '../../models/user/user';
import { UserRole } from '../../models/user/user-role';

export class CRUDController {

	static MASTER_CLASS = SEntity;

	public static async Create(req: Request, res: Response, next: NextFunction) {
		var data = [];
		for (var i in req.body) {
			data.push(Object.assign(new this.MASTER_CLASS(), req.body[i]));
		}

		// verify user access here
		// validate data
		this.MASTER_CLASS.Create(data);
		// return the new obj
	}

	public static async Read(req: Request, res: Response, next: NextFunction) {

	}

	public static async Update(req: Request, res: Response, next: NextFunction) {
		var data = [];
		for (var i in req.body) {
			data.push(Object.assign(new this.MASTER_CLASS(), req.body[i]));
		}
		// verify user access here
		// validate data
		this.MASTER_CLASS.Update(data);
		// return the new obj
	}

	public static async Delete(req: Request, res: Response, next: NextFunction) {
		var data = [];
		for (var i in req.body) {
			data.push(Object.assign(new this.MASTER_CLASS(), req.body[i]));
		}
		// verify user access here
		// validate data
		this.MASTER_CLASS.Delete(data);
		// return the new obj
	}

}