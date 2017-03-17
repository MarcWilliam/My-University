/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package models.CMS;

import java.util.ArrayList;
import models.*;

/**
 *
 * @author AAGOOGLE
 */
public class Post extends SEntity {

	User creater;
	ArrayList<Comment> Comments;
	ArrayList<Group> Groups;
	ArrayList<UploadedFile> files;
	String title, content;

}
