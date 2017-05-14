import * as express from 'express';
import * as cors from 'cors';
import * as bodyParser from 'body-parser';
import * as logger from 'morgan';
import * as json2xls from 'json2xls';
import { Express } from 'express';

import CONFIG from '../config';
import { PassportAuth } from '../middleware/authentication-passport';
import { UserRouter, UserRoleRouter } from '../routes/user-routers';
import { DepartmentRouter, SemesterRouter, CourseRouter, CourseOfferingRouter } from '../routes/registration-routers';

/**
 * Creates and configures an ExpressJS web server.
 * @author Marc Wafik
 */
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
		this.start();
	}

	/**
	 * In order for the server to work with a depolyment service like 'Heroku',we must specify 'process.env.PORT'
	 * but by Also adding a second option of 'CONFIG.HTTP.PORT', it will also allow You to run the server locally with Node.
	 */
	private start(): void {
		this.express.listen(process.env.PORT || CONFIG.HTTP.PORT,
			() => console.log(`\t HTTP server started listening to localhost:${CONFIG.HTTP.PORT}`)
		);
	}

	/**
	 * Configure Express middleware
	 */
	private middleware(): void {
		this.express.use(bodyParser.urlencoded({ extended: false }));	// Parses urlencoded bodies
		this.express.use(bodyParser.json());							// Send JSON responses
		this.express.use(logger('dev'));								// Log requests to API using morgan
		this.express.use(cors());										// Enable Cross-origin resource sharing
		this.express.use(PassportAuth.Passport.initialize());			// Initialize authentication passport middleware
		this.express.use(json2xls.middleware);
	}

	/**
	 * Configure API endpoints.
	 */
	private routes(): void {
		this.express.use('/api/users', UserRouter.Router());
		this.express.use('/api/user-roles', UserRoleRouter.Router());

		this.express.use('/api/departments', DepartmentRouter.Router());
		this.express.use('/api/semesters', SemesterRouter.Router());
		this.express.use('/api/cources', CourseRouter.Router());
		this.express.use('/api/cource_offerings', CourseOfferingRouter.Router());
	}
}