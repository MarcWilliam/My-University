import { Request, Response, NextFunction } from 'express';

import CONFIG from '../../config';
import { CRUDController } from '../core/crud-controller';
import { Semester } from './../../models/registration/semester';

/**
 * @author Marc Wafik
 */
export class SemesterController extends CRUDController {
	static MODEL = Semester;
}