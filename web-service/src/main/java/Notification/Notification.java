/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Notification;

import enrole.SEntity;
import enrole.User;

/**
 *
 * @author marcw
 */
public class Notification extends SEntity {

	String title, message;
	User sender, recipient;

	int priority;
	boolean isRead;


}
