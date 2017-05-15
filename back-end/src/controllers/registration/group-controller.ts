import CONFIG from '../../config';
import { CRUDController } from '../core/crud-controller';
import { Group } from '../../models/registration/group';

/**
 * @author Marc Wafik
 */
export class GroupController extends CRUDController {
	static MODEL = Group;
}