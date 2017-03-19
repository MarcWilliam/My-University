package Files;

import core.SEntity;
import User.User;
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
