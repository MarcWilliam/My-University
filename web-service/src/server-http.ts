'use strict';

import * as express from 'express';
import * as cors from 'cors';
import * as bodyParser from 'body-parser';
import { Express } from "express";

import CONFIG from './config';

var app = express();

app.use((req, res, next) => {
	console.log(`HTTP => Method: ${req.method} \t URL: ${req.url}`);
	next();
});

app.get("/api/", (req, res) => res.send('Hello World!'));

app.listen(CONFIG.HTTP.PORT, () => console.log(
	`\t HTTP server started listening to \t URL: http://localhost:${CONFIG.HTTP.PORT}/`));