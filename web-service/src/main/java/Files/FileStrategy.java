package Files;

import java.io.File;

/**
 *
 * @author marcw
 */
public abstract class FileStrategy {

	abstract boolean validateFile(File file);

	abstract boolean compressFile(File file);
}
