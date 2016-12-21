import App from './app';
import Home from './home';
import Product from './product';
import Contact from './contact';

import React from 'react';
import { IndexRoute, Route, Router, browserHistory } from 'react-router';


// define route
const routes = (
  <Router history={ browserHistory }>
    <Route path='/' component={ App }>
      <IndexRoute component={ Home } />
      <Route path='products' component={ Product } />
      <Route path='contact' component={ Contact } />
    </Route>
  </Router>
);

export default routes;