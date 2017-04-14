import { SEntity } from '../core/s-entity';
import { User } from '../user/user';
import { FileStrategy } from './file-strategy';

/**
 * 
 * @author marcw
 */
export class UpFile extends SEntity {
	
	Path: string;
	file: File;
	UploaderBy: User;
	strategy: FileStrategy;

	/**
	 * 
	 * @return the file type
	 */
	public getFileType(): Type {
		return null;
	}

	/**
	 * call the strategy file
	 * to check each file if it belongs to the proper category
	 * 
	 * @return
	 */
	public validate(): boolean {
		return this.strategy.validateFile(this.file);
	}

	/**
	 * compress the file to save disk space and improve the performance
	 * 
	 * @return
	 */
	public compress(): boolean {
		return this.strategy.compressFile(this.file);
	}

	constructor() {
		super();
	}
}

export enum Type {
	IMG, VIDEO, Document
}
