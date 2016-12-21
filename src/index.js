import React from 'react';
import ReactDOM from 'react-dom';

import routes from './components/router';
import App from './components/app';

ReactDOM.render(
  routes,
  document.querySelector('.app')
);