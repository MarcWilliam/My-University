package Registration;

import core.SEntity;

/**
 * a passive representation of a course
 */
public class Course extends SEntity {

	String name, code, description;
	Course[] prerequisites;
	int creditHours;
	int level;
	Department department;
}
