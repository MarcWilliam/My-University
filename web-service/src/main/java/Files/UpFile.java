package Files;

import User.User;
import core.SEntity;
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

	/**
	 *
	 * @return the file type
	 */
	UpFile.Type getFileType() {
		return null;
	}

	/**
	 * call the strategy file
	 * to check each file if it belongs to the proper category
	 *
	 * @return
	 */
	boolean validate() {
		return this.strategy.validateFile(file);
	}

	/**
	 * compress the file to save disk space and improve the performance
	 *
	 * @return
	 */
	boolean compress() {
		return this.strategy.compressFile(file);
	}
}
