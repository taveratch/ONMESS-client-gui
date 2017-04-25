import 'babel-polyfill'; // need to import this for use await/async
import React from 'react'; // eslint-disable-line no-unused-vars
import ReactDOM from 'react-dom';
import Root from 'components/root'; // eslint-disable-line no-unused-vars
import './index.css';

ReactDOM.render(
  <Root />,
  document.getElementById('root')
);
