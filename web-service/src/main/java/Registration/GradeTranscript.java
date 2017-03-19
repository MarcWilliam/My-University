package Registration;

/**
 * calculate the user gpa & completed credit hours from this Courses Registration
 */
public class GradeTranscript {

	CourseRegistration[] cources;
	int totalCreditHours, totalGPA;

	/**
	 * calculate the user GPA
	 *
	 * @return the user GPA
	 */
	public int calculateGPA() {
		throw new UnsupportedOperationException("Not supported yet.");
	}

	/**
	 * fetch the Grade transcript from DB by user ID
	 *
	 * @param user_id the user ID
	 * @return the grade transcript
	 */
	static GradeTranscript readGradeTranscript(int user_id) {
		return null;
	}
}
