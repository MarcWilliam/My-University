package Registration;

import User.User;

/**
 *
 * @author marcw
 */
public class CourseRegistration {

	protected CourseOffering courceOffer;
	protected int student_id, courceOffer_id, totalGrade;

	/**
	 * recalculate the GPA from the graded items
	 *
	 * @return true if update success else false
	 */
	public boolean reCaulculateGrade() {
		throw new UnsupportedOperationException("Not supported yet.");
	}

	/**
	 * @return the letter grade representing the grade
	 */
	public String getLetterGrade() {
		throw new UnsupportedOperationException("Not supported yet.");
	}

	/**
	 * fetch the student from the db by id
	 *
	 * @return the student
	 */
	public User fetchStudent() {
		throw new UnsupportedOperationException("Not supported yet.");
	}

	/**
	 * fetch the course offer the db by id
	 *
	 * @return
	 */
	public User fetchCourceOffer() {
		throw new UnsupportedOperationException("Not supported yet.");
	}
}
