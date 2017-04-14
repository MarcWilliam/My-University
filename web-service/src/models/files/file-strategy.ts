
/**
 * abstract file strategy class to handle different files types
 * 
 * @author marcw
 */
export abstract class FileStrategy {
	abstract validateFile(file: File): boolean;

	abstract compressFile(file: File): boolean;
}