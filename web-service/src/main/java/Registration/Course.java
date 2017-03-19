package Registration;

import core.SEntity;

/**
 *
 * @author marcw
 */
public class Course extends SEntity {

	String name, code, description;
	Course[] prerequisites;
	int creditHours;
	int level;
	Department department;
}
