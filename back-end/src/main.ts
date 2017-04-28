'use strict';

import * as cluster from 'cluster';
import * as os from 'os';

import CONFIG from './config';
import { User } from './models/user/user';

if (CONFIG.CLUSTER.USE && cluster.isMaster) {

	var numWorkers = CONFIG.CLUSTER.NUMBER == 0 ? os.cpus().length : CONFIG.CLUSTER.NUMBER;

	console.log(`Master cluster setting up ${numWorkers} workers...`);

	for (var i = 0; i < numWorkers; i++) {
		cluster.fork();
	}

	cluster.on('online', (worker) => {
		console.log(`Worker ${worker.process.pid} \t is online`);
	});

	cluster.on(`exit`, (worker, code, signal) => {
		console.warn(`Worker ${worker.process.pid} died with code: ${code}, and signal: ${signal}`);
		console.log(`Starting a new worker...`);
		cluster.fork();
	});

} else {
	require("./server-http"); // load the http server
	require("./server-tcp"); // load the tcp server
}

User.read("id", 1).then((data) => console.log(data));