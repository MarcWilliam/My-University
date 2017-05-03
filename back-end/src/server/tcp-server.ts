import * as express from 'express';
import * as http from 'http';
import * as socketio from 'socket.io';

import CONFIG from '../config';

export default class TCPserver {
	public express: express.Application;
	public server;
	public io: SocketIO.Server;

	/**
	 * Run configuration methods on the Express instance
	 */
	constructor() {
		this.express = express();
		this.server = http.createServer(this.express).listen(CONFIG.TCP.PORT, () => console.log(
			`\t TCP  server started listening to localhost:${CONFIG.TCP.PORT}`));
		this.io = socketio(this.server);
	}


	/**
	 * Configure socket events
	 */
	private routes(): void {
		this.io.on("connection", (socket) => {

			socket.on("something", (data) => { });

			console.log(`TCP  => From: ${socket.handshake.address} \t SocketID: ${socket.id}`);
		});
	}
}