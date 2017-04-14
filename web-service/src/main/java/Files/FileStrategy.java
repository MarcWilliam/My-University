package Files;

import java.io.File;

/**
 * abstract file strategy class to handle different files types
 *
 * @author marcw
 */
public abstract class FileStrategy {

	abstract boolean validateFile(File file);

	abstract boolean compressFile(File file);
}
