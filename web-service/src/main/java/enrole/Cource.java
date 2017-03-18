package enrole;

/**
 *
 * @author marcw
 */
public class Cource extends SEntity {

	String name, code, description;
	Cource[] prerequisites;
	int creditHours;
	int level;
	Department department;
}
