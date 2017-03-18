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
public class Exam extends Post {

	int maxGrades;
	CourceOffering cource;

	Date StartTime, EndTime;

	Group[] Groups;
}
