/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package models;

import java.util.Date;
import models.SEntity;

/**
 *
 * @author marcw
 */
public class User extends SEntity {

	String name;
	String email;
	Date birthDate;
	
	private String hasedPassword;
}
