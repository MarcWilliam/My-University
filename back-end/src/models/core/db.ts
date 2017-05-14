import * as mysql from 'mysql2/promise';
import * as bluebird from 'bluebird';

import CONFIG from '../../config';

export class DBconn {

	private static _connection = null;

	public static async getConnection() {
		return DBconn._connection = DBconn._connection ||
			(await mysql.createConnection({
				host: CONFIG.DB.HOST,
				user: CONFIG.DB.USERNAME,
				password: CONFIG.DB.PASSWORD,
				database: CONFIG.DB.DATABASE,
				Promise: bluebird
			}));

	}
}

export enum DBopp {
	AND, OR
}
export enum DBcrud {
	CREATE, READ, UPDATE, DELETE
}