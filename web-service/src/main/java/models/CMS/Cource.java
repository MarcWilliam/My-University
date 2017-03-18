/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package models.CMS;

import models.Department;
import models.SEntity;

/**
 *
 * @author marcw
 */
public class Cource extends SEntity {

	String name, code, description;
	Cource[] prerequisites;
	Department department;
}
