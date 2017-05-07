import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';
import CONFIG from '../../config';

import { SEntity } from './../../models/core/s-entity';
import { User } from '../../models/user/user';
import { UserRole } from '../../models/user/user-role';
import { hasPermission } from '../../models/user/permission';
import { HTTPClientErr } from './http-stats';

export class CRUDController {

	static MODEL = SEntity;

	public static async Create(req: Request, res: Response, next: NextFunction) {
		var data = [], rejected = [], notValid = [];

		var user = <User>await User.Read({ id: req.user.id })[0];
		// <<<<<<<<<check user ==null
		var role = <UserRole>await UserRole.Read({ id: user.userRoleID })[0];
		// <<<<<<<<<check role ==null

		for (let i in req.body) {
			let tmp: SEntity = Object.assign(new this.MODEL(), req.body[i]);

			tmp.hasPermission(user, role).create ?
				(await tmp.isValid() ? data.push(tmp) : notValid.push(tmp))
				: rejected.push(tmp);
		}
		if (notValid.length == 0 && rejected.length == 0) {
			this.MODEL.Create(data);
			// <<<<<<<<<<<<< return responce here
		}
		// <<<<<<<<<<<<< return responce here
		return next();
	}

	public static async Read(req: Request, res: Response, next: NextFunction) {
		let limit = req.query.limit,
			offset = req.query.offset,
			key = req.params.key,
			value = req.params.value;
		let feilds = (key && value) ? { [key]: value } : null;

		var user = <User>await User.Read({ id: req.user.id })[0];
		// <<<<<<<<<check user ==null
		var role = <UserRole>await UserRole.Read({ id: user.userRoleID })[0];
		// <<<<<<<<<check role ==null

		var rejected = [], accepted = [], data = await this.MODEL.Read(feilds, null, limit, offset);

		for (var i in data) {
			data[i].hasPermission(user, role).update ? accepted.push(data[i]) : rejected.push(data[i]);
		}

		this.CRUDrespon(res, accepted, rejected);
		next();
	}

	private static CRUDrespon(res, accepted = [], rejected = [], notValid = []) {
		if (notValid.length == 0 && rejected.length == 0) {
			res.json({ data: accepted });
		} else if (rejected.length != 0) {
			res.json({
				error: {
					code: HTTPClientErr.Forbidden,
					message: "don't have enouph permissions"
				}
			});
		} else if (notValid.length != 0) {
			res.json({
				error: {
					code: HTTPClientErr.UnprocessableEntity,
					message: "didn't pass the validation"
				}
			});
		}
	}

	public static async Update(req: Request, res: Response, next: NextFunction) {
		var accepted = [], rejected = [], notValid = [];

		var user = <User>await User.Read({ id: req.user.id })[0];
		// <<<<<<<<<check user ==null
		var role = <UserRole>await UserRole.Read({ id: user.userRoleID })[0];
		// <<<<<<<<<check role ==null

		for (let i in req.body) {
			let tmp: SEntity = Object.assign(new this.MODEL(), req.body[i]);

			tmp.hasPermission(user, role).update ?
				(await tmp.isValid() ? accepted.push(tmp) : notValid.push(tmp))
				: rejected.push(tmp);
		}

		if (notValid.length == 0 && rejected.length == 0) {
			this.MODEL.Update(accepted);
		}

		this.CRUDrespon(res, accepted, rejected, notValid);
		return next();
	}

	public static async Delete(req: Request, res: Response, next: NextFunction) {
		var ids = req.params.ids.split(",");
		var accepted = [], rejected = [], data = this.MODEL.Read({ id: ids });

		var user = <User>await User.Read({ id: req.user.id })[0];
		// <<<<<<<<<check user ==null
		var role = <UserRole>await UserRole.Read({ id: user.userRoleID })[0];
		// <<<<<<<<<check role ==null

		for (let i in data) {
			data[i].hasPermission(user, role).delete ? accepted.push(data[i]) : rejected.push(data[i]);
		}

		if (rejected.length == 0) {
			this.MODEL.Delete(accepted);
		}

		this.CRUDrespon(res, accepted, rejected);
		return next();
	}

}

export interface APIres {
	data: any[];
	error: {
		code: number,
		message: string
	};
}