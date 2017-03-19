package Registration;

import core.SEntity;

/**
 * a passive representation of a course
 */
public class Course extends SEntity {

	protected String name, code, description;
	protected Course[] prerequisites;
	protected int creditHours;
	protected int level;
	protected Department department;
}
