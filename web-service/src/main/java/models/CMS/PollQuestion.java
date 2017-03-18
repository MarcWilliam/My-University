/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package models.CMS;

import models.SEntity;

/**
 *
 * @author marcw
 */
public class PollQuestion extends SEntity {

	Choices[] options;
	boolean isRequired;

	boolean hasTextArea;

	static class Choices {

		int number;
		String text;
	}
}
