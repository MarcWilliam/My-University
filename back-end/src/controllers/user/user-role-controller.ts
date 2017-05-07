import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';

import CONFIG from '../../config';
import { UserRole } from '../../models/user/user-role';
import { CRUDController } from '../core/crud-controller';

export class UserRoleController extends CRUDController {
	static MODEL = UserRole;
}