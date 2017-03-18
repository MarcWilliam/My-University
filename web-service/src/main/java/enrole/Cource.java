package enrole;

import enrole.Department;
import enrole.SEntity;

/**
 *
 * @author marcw
 */
public class Cource extends SEntity {

	String name, code, description;
	Cource[] prerequisites;
	int creditHours;
	Department department;
}
