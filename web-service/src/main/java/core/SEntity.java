package core;

import java.util.Date;

/**
 *
 */
public abstract class SEntity {

	protected int id;
	protected Date createdAt, updatedAt;

	public boolean save() {
		return (this.id == 0) ? this.create() : this.update();
	}

	/**
	 * update the object data in the DB
	 * this.id must be same as the thing to be updated
	 *
	 * @return True if everything pass else false
	 */
	public boolean update() {
		throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
	}

	/**
	 * insert the object data in the DB
	 * this.id must 0
	 * this.id will be updated to the new id
	 *
	 * @return True if everything pass else false
	 */
	public boolean create() {
		throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
	}

	/**
	 * delete the object data in the DB
	 * this.id must be same as the thing to be updated
	 *
	 * @return True if everything pass else false
	 */
	public boolean delete() {
		throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
	}

	/**
	 * select the object data from the DB
	 * set this object data to the current
	 *
	 * @return True if everything pass else false
	 */
	public boolean read(int id) {
		throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
	}
}
