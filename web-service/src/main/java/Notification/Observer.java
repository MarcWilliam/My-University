/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Notification;

/**
 *
 * @author marcw
 */
public interface Observer<SubjectT> {

	public boolean sendNotification(SubjectT subject, Notification Notification);
	
}
