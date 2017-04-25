import {Router, Route} from 'react-router'; // eslint-disable-line no-unused-vars
import App from './App';
import About from './App/about';
import React from 'react'; // eslint-disable-line no-unused-vars
import Board from './App/board/board';

export default (props) => (
  <Router {...props}>
    <Route path='/' component={App} />
    <Route path='/board' component={Board} />
    <Route path='/about' component={About} />
  </Router>
);
