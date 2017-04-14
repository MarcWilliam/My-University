package core;

/**
 * interface for any object with search functionality
 */
public interface Searchable<T> {

	/**
	 * search in the DB for matched
	 *
	 * @param query the search query
	 * @return array containing all the results
	 */
	public T[] search(String query);
}
