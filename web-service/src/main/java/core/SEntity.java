package core;

import java.util.Date;

/**
 *
 * @author marcw
 */
public abstract class SEntity {

	protected int id;
	protected Date createdAt, updatedAt;

	public boolean save() {
		return (this.id == 0) ? this.create() : this.update();
	}

	public boolean update() {
		throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
	}

	public boolean create() {
		throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
	}

	public boolean delete() {
		throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
	}

	public boolean read(int id) {
		throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
	}
}
