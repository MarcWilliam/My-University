/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
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
