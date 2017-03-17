/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package models;

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
		return false;
	}

	public boolean create() {
		return false;
	}

	public boolean delete() {
		return false;
	}

	public boolean read(int id) {
		return false;
	}
}
