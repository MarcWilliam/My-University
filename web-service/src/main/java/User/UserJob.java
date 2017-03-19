package User;

import Registration.Department;
import core.SEntity;

/**
 *
 * @author marcw
 */
public class UserJob extends SEntity {

	Department department;
	UserRole role;
	String genCode;
}
