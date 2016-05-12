import React, { Component } from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from '../containers/App';
import HomeContainer from '../containers/HomeContainer';

const routes = (
  <Router history={hashHistory} >
    <Route path='/' component={App} >
      <IndexRoute component={HomeContainer} />
    </Route>
  </Router>
);

export default routes;
