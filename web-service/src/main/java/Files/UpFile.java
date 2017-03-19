package Files;

import User.User;
import core.SEntity;
import java.io.File;

/**
 *
 * @author marcw
 */
public class UpFile extends SEntity {

	protected String Path;
	protected File file;
	protected User UploaderBy;
	protected FileStrategy strategy;

	public static enum Type {
		IMG, VIDEO, Document
	}

	/**
	 *
	 * @return the file type
	 */
	public UpFile.Type getFileType() {
		return null;
	}

	/**
	 * call the strategy file
	 * to check each file if it belongs to the proper category
	 *
	 * @return
	 */
	public boolean validate() {
		return this.strategy.validateFile(file);
	}

	/**
	 * compress the file to save disk space and improve the performance
	 *
	 * @return
	 */
	public boolean compress() {
		return this.strategy.compressFile(file);
	}
}
