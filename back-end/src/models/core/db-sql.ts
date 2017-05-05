import * as mysql from 'mysql2/promise';
import * as bluebird from 'bluebird';

import CONFIG from '../../config';

export class DBsql {

	private static _connection = null;

	public static async getConnection() {
		return DBsql._connection = DBsql._connection ||
			await mysql.createConnection({
				host: CONFIG.DB.HOST,
				user: CONFIG.DB.USERNAME,
				password: CONFIG.DB.PASSWORD,
				database: CONFIG.DB.DATABASE,
				Promise: bluebird
			});
	}
}