import React from 'react';
import {browserHistory} from 'react-router';
import Routes from './routes'; // eslint-disable-line no-unused-vars
class Root extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
      <Routes history={browserHistory}/>
    );
	}
}
export default Root;
