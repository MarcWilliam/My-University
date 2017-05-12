declare module 'mysql2/promise';

declare namespace Express {
	export interface Request {
		userRole?: any;
	}
	export interface Response {
		xls: Function;
	}
}
