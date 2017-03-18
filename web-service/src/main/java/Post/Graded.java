/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Post;

import enrole.CourseOffering;
import enrole.Group;

/**
 *
 * @author marcw
 */
public class Graded extends AbstractPost {

	CourseOffering cource;
	Group[] groups;
	int maxGrade, scaleFactor;
}
