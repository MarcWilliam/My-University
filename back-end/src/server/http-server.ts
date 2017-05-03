import * as express from 'express';
import * as cors from 'cors';
import * as bodyParser from 'body-parser';
import * as logger from 'morgan';
import { Express } from 'express';

import CONFIG from '../config';
import UserRouter from '../routes/user/user-routes';

// Creates and configures an ExpressJS web server.
export default class HTTPserver {
	// ref to Express instance
	public express: express.Application;

	/**
	 * Run configuration methods on the Express instance
	 */
	constructor() {
		this.express = express();
		this.middleware();
		this.routes();

		// In order for the server to work with a depolyment service like 'Heroku',we must specify 'process.env.PORT'
		// but by Also adding a second option of 'CONFIG.HTTP.PORT', it will also allow You to run the server locally with Node.
		this.express.listen(
			process.env.PORT || CONFIG.HTTP.PORT,
			() => console.log(`\t HTTP server started listening to localhost:${CONFIG.HTTP.PORT}`)
		);
	}

	/**
	 * Configure Express middleware
	 */
	private middleware(): void {
		this.express.use(bodyParser.urlencoded({ extended: false }));  // Parses urlencoded bodies
		this.express.use(bodyParser.json());	// Send JSON responses
		this.express.use(logger('dev'));		// Log requests to API using morgan
		this.express.use(cors());				// Enable Cross-origin resource sharing
	}

	/**
	 * Configure API endpoints.
	 */
	private routes(): void {
		this.express.use('/api/users', UserRouter);
	}
}