/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package models;

import java.io.File;

/**
 *
 * @author marcw
 */
public class UploadedFile extends SEntity {

	String Path;
	File file;
	User UploaderBy;

	enum Type {
		IMG, VIDEO, Document
	}

	UploadedFile.Type getFileType() {
		return null;
	}
}
