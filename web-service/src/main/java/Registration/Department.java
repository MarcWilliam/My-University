package Registration;

import Files.UpFile;
import core.SEntity;

/**
 * Department can be Faculty of CS or English Department ...etc
 */
public class Department extends SEntity {

	/**
	 * parent used for major / minor
	 */
	Department parent;
	String name;
	String description;
	UpFile LogoImg;
}
