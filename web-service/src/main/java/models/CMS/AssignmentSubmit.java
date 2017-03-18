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
 * @author marcw
 */
public class AssignmentSubmit extends SEntity {

	User student;
	Assignment assignmet;
	int grade;
	String studentNotes;
	ArrayList<UpFile> files;
}
