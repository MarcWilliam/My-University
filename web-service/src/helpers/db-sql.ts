import CONFIG from '../config';
import mysql from 'mysql2';

export class DBsql {

	private static _connection: mysql = null;

	public static get connection() {

		if (DBsql._connection == null) {
			DBsql._connection = mysql.createConnection({
				host: CONFIG.DB.HOST,
				user: CONFIG.DB.USERNAME,
				password: CONFIG.DB.PASSWORD,
				database: CONFIG.DB.DATABASE
			});
		}
		return DBsql._connection;
	}
}