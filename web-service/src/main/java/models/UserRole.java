/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package models;

/**
 *
 * @author marcw
 */
public class UserRole {

	String name, description;

	public static enum PermissionItme {
		USER, ASSIGNMENT, ASSIGNMENT_SUBMIT, COURSE, COURSE_OFFERING, DEPARTMENT, GROUP
	}

	public static class Permission {

		PermissionItme Itme;
		boolean create, read, update, delete;
	}
}
