'use strict';

import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Layout from './components/Layout';
import IndexPage from './components/IndexPage';
import WatchGroupPage from './components/WatchGroupPage';
import NotFoundPage from './components/NotFoundPage';

const routes = (
  <Route path="/" component={Layout}>
  	<IndexRoute component={IndexPage}/>
  	<Route path="watchGroup/:id" component={WatchGroupPage}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);

export default routes;