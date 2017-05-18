import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';
import CONFIG from '../../config';

import { SEntity } from './../../models/core/s-entity';
import { User } from '../../models/user/user';
import { UserRole } from '../../models/user/user-role';
import { hasPermission } from '../../models/user/permission';
import { HTTPstat } from './http-stats';
import { DBcrud } from '../../models/core/db';

export abstract class CRUDController {

	/**
	 * behavior pattern hold the behavior to be overiten upon inheritence
	 */
	static MODEL = SEntity;

	/**
	 * 
	 * @param res the express responce
	 * @param accepted the accepted data
	 * @param rejected the rejected data ids' ( didn't have permission)
	 * @param notValid the not valid data erros ( and array of errors for each object )
	 * @param type the type of responce default JSON but can also be xls
	 */
	private static CRUDrespon(res, accepted = [], rejected = [], notValid = [], type?) {
		type = type ? type : 'json';

		if (rejected.length != 0) {
			res.json({
				error: {
					code: HTTPstat.ClientErr.Forbidden,
					message: "don't have enough permissions"
				},
				rejected: rejected
			});
		} else if (notValid.length != 0) {
			res.json({
				error: {
					code: HTTPstat.ClientErr.UnprocessableEntity,
					message: "didn't pass the validation"
				},
				notValid: notValid
			});
		} else {

			switch (type) {
				case 'xls':
				case 'xlsx':
					res.xls('data.xlsx', accepted);
					break;
				case 'json':
				default:
					res.json({ data: accepted });
					break;
			}

		}
	}

	/**
	 * 
	 * @param req an array of data of be created
	 * @param res the data after creation
	 */
	public static async Create(req: Request, res: Response, next: NextFunction) {
		var accepted = [], rejected = [], notValid = [], data = (await this.MODEL.ParceData(req.body));

		for (let i in data) {
			if (!data[i].hasPermission(req.user, req.userRole).create) {
				rejected.push(data[i]);
			} else {
				let errors = (await data[i].getErrors(DBcrud.CREATE));
				errors.length != 0 ? notValid.push(errors) : accepted.push(data[i]);
			}
		}

		if (notValid.length == 0 && rejected.length == 0) {
			(await this.MODEL.Create(data));
		}

		this.CRUDrespon(res, accepted, rejected, notValid);
		return next();
	}

	/**
	 * 
	 * @param req limit and offset , then key / values + responce type ( json , xls)
	 * @param res an array of data
	 */
	public static async Read(req: Request, res: Response, next: NextFunction) {
		let limit = req.query.limit == null ? null : parseInt(req.query.limit),
			offset = req.query.offset == null ? null : parseInt(req.query.offset),
			feilds = (req.params.key && req.params.value) ? { [req.params.key]: req.params.value.split(",") } : null;

		var accepted = [], rejected = [], data = (await this.MODEL.Read(feilds, null, limit, offset));

		for (var i in data) {
			data[i].hasPermission(req.user, req.userRole).read ? accepted.push(data[i]) : rejected.push(data[i].id);
		}

		this.CRUDrespon(res, accepted, rejected, [], req.params.type);
		return next();
	}

	/**
	 * 
	 * @param req limit and offset , then keys / value to serach for + responce type ( json , xls)
	 * @param res an array of data
	 */
	public static async Search(req: Request, res: Response, next: NextFunction) {
		let limit = req.query.limit == null ? null : parseInt(req.query.limit),
			offset = req.query.offset == null ? null : parseInt(req.query.offset),
			keys = req.params.keys.split(",");

		var accepted = [], rejected = [], data = (await this.MODEL.Search(keys, req.params.value, limit, offset));

		for (var i in data) {
			data[i].hasPermission(req.user, req.userRole).read ? accepted.push(data[i]) : rejected.push(data[i].id);
		}

		this.CRUDrespon(res, accepted, rejected, [], req.params.type);
		return next();
	}

	/**
	 * 
	 * @param req an array of data of be updated
	 * @param res the data after update
	 */
	public static async Update(req: Request, res: Response, next: NextFunction) {
		var accepted = [], rejected = [], notValid = [], data = (await this.MODEL.ParceData(req.body));

		for (let i in data) {
			if (!data[i].hasPermission(req.user, req.userRole).update) {
				rejected.push(data[i]);
			} else {
				let errors = (await data[i].getErrors(DBcrud.UPDATE));
				errors.length != 0 ? notValid.push(data[i]) : accepted.push(data[i]);
			}
		}

		if (notValid.length == 0 && rejected.length == 0) {
			(await this.MODEL.Update(accepted));
		}

		this.CRUDrespon(res, accepted, rejected, notValid);
		return next();
	}

	/**
	 * 
	 * @param req takes an array of ids to be deleted (12,32,59)
	 * @param res an array of deleted itmes
	 */
	public static async Delete(req: Request, res: Response, next: NextFunction) {
		var accepted = [], rejected = [], data = (await this.MODEL.Read({ id: req.params.ids.split(",") }));

		for (let i in data) {
			data[i].hasPermission(req.user, req.userRole).delete ?
				accepted.push(data[i]) :
				rejected.push(data[i].id);
		}

		if (rejected.length == 0) {
			(await this.MODEL.Delete(accepted));
		}

		this.CRUDrespon(res, accepted, rejected);
		return next();
	}

}