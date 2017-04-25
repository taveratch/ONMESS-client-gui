import socketIO from 'socket.io-client';

let instance = null;

class SocketController {
	constructor() {
		if(!instance) {
			instance = this;
			this.socket = socketIO('http://localhost:7000');
		}
		return instance;
	}

	fireDummy() {
		this.socket.on('connect', () => {
			console.log(this.socket.id); // eslint-disable-line
		});
	}
}

export default SocketController;
