package User;

import Registration.Department;
import core.SEntity;

/**
 *
 * @author marcw
 */
public class UserJob extends SEntity {

	protected Department department;
	protected UserRole role;
	/**
	 * generated code for user to enter at registration
	 */
	protected String genCode;
}
