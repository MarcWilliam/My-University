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
public class User extends SEntity {

	String name, email;
	int universityID, phone;
	Date birthDate;

	private String hasedPassword;

	boolean login(String email, String password) {
		return false;
	}

	boolean logout() {
		return false;
	}
}
