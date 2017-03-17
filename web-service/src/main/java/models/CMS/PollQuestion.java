/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package models.CMS;

import java.util.ArrayList;

/**
 *
 * @author marcw
 */
public class PollQuestion {

	ArrayList<Choices> options;

	boolean hasTextArea;

	static class Choices {

		int number;
		String text;
	}
}
