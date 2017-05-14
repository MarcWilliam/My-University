import CONFIG from '../../config';
import { CRUDController } from '../core/crud-controller';
import { CourseOffering } from '../../models/registration/course-offering';

/**
 * @author Marc Wafik
 */
export class CourseOfferingController extends CRUDController {
	static MODEL = CourseOffering;
}