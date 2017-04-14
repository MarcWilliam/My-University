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
	protected Department parent;
	protected String name, description;
	protected UpFile LogoImg;
}
