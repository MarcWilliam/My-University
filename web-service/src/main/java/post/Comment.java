/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package post;

import enrole.SEntity;
import enrole.User;

/**
 *
 * @author AAGOOGLE
 */
public class Comment extends SEntity {

	User user;
	Comment parent;
	String content;

}
