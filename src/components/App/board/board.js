import React from 'react';
import ReactDOM from 'react-dom';
import rp from 'request-promise';
import {observer} from 'mobx-react';
import socketController from 'js/socket/controller';

@observer // eslint-disable-line
class Board extends React.Component {

	constructor(props) {
		super(props);
		this.connect = this.connect.bind(this);
	}

	componentDidMount() {
		let controller = new socketController();
		controller.fireDummy();

	}

	async connect() {
		let channelName = ReactDOM.findDOMNode(this.refs['channel-name']).value.trim();
		let res = await rp(`http://localhost:7000/channel/${channelName}`);
		console.log(res); // eslint-disable-line
	}

	render() {
		return (
      <div>
        <input ref='channel-name' />
        <button onClick={this.connect}>Connect</button>
      </div>
    );
	}
}

export default Board;
