/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Files;

import enrole.SEntity;
import enrole.User;
import java.io.File;

/**
 *
 * @author marcw
 */
public class UpFile extends SEntity {

	String Path;
	File file;
	User UploaderBy;
	FileStrategy strategy;

	static enum Type {
		IMG, VIDEO, Document
	}

	UpFile.Type getFileType() {
		return null;
	}

	boolean validate() {
		return this.strategy.validateFile(file);
	}

	boolean compress() {
		return this.strategy.compressFile(file);
	}
}
