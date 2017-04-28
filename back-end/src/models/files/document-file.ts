import { FileStrategy } from './file-strategy';

/**
 * 
 * @author marcw
 */
export class DocumentFile extends FileStrategy {
	validateFile(file: File): boolean {
		return null;
	}

	compressFile(file: File): boolean {
		return null;
	}
}

