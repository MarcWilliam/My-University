import { Request, Response, NextFunction } from 'express';

import CONFIG from '../../config';
import { CRUDController } from '../core/crud-controller';
import { Department } from '../../models/registration/department';

/**
 * @author Marc Wafik
 */
export class DepartmentController extends CRUDController {
	static MODEL = Department;
}