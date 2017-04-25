import express from 'express';
import SocketController from './controller.js';

let app = express();
let http = require('http').Server(app);
const PORT = 8001;
let socketController = new SocketController(http, app);


socketController.fireDummy();

http.listen(PORT, () => {
	console.log('listening on port : ' + PORT); // eslint-disable-line
});
