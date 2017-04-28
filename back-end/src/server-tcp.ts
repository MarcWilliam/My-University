import * as express from 'express';
import * as http from 'http';
import * as socketio from 'socket.io';

import CONFIG from './config';

var app = express();
var server = http.createServer(app).listen(CONFIG.TCP.PORT, () => console.log(
	`\t TCP  server started listening to \t URL: http://localhost:${CONFIG.TCP.PORT}/`));

var io = socketio(server);

io.on("connection", (socket) => {

	socket.on("create", (data) => {

	});

	console.log(`TCP  => From: ${socket.handshake.address} \t SocketID: ${socket.id}`);
});