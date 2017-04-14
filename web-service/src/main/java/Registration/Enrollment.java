package Registration;

import User.UserJob;

/**
 * hold enrollment data for each term
 */
public class Enrollment extends UserJob {

	protected Department major, minor;
	protected int year;
	protected Semester semester;

	/**
	 * fetch enrollment by the following
	 *
	 * @param userID
	 * @param year
	 * @param semester
	 * @return enrollment or null if not registered
	 */
	public static Enrollment readEnrollment(int userID, int year, Semester semester) {
		return null;
	}

	/**
	 * fetch all the enrollment related to this user
	 *
	 * @param userID the user id to be used in the search query
	 * @return array of enrollment or null if new student
	 */
	public static Enrollment readAllEnrollment(int userID) {
		return null;
	}

}
