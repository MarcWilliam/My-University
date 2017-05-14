import CONFIG from '../../config';
import { CRUDController } from '../core/crud-controller';
import { Course } from '../../models/registration/course';

/**
 * @author Marc Wafik
 */
export class CourseController extends CRUDController {
	static MODEL = Course;
}