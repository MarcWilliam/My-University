export interface CError {
	param: String;
	msg: String;
	value: String;
	errCode: CErrorCode;
}

export enum CErrorCode {
	notUnique, invalidFormat
}