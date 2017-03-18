/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package post;

import java.util.Date;
import enrole.CourceOffering;
import enrole.Group;

/**
 *
 * @author marcw
 */
public class Assignment extends Post {

	Date dueDate, lateSubmits;
	int maxGrade;
	CourceOffering cource;
	Group[] groups;
}
