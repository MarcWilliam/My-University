package core;

/**
 * interface for classes that require permission for CRUD operations
 */
public interface hasPermission {

	/**
	 *
	 * @return the current user permission
	 */
	public Permission hasPermission();
}
