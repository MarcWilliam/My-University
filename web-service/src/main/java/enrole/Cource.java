/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package enrole;

import enrole.Department;
import enrole.SEntity;

/**
 *
 * @author marcw
 */
public class Cource extends SEntity {

	String name, code, description;
	Cource[] prerequisites;
	int creditHours;
	Department department;
}
