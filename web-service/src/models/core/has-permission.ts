
/**
 * interface for classes that require permission for CRUD operations
 */
export interface hasPermission {
	/**
	 * 
	 * @return the current user permission
	 */
	hasPermission(): Permission;
}