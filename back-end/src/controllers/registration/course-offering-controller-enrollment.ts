import CONFIG from '../../config';
import { CRUDController } from '../core/crud-controller';
import { CourseOfferingEnrollment } from './../../models/registration/course-offering-enrollment';

/**
 * @author Marc Wafik
 */
export class CourseOfferingEnrollmentController extends CRUDController {
	static MODEL = CourseOfferingEnrollment;
}