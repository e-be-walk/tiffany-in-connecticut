import React from 'react';
import './App.css';
import { Switch, Router, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import SiteIndex from './Site/Index';
import SiteNew from './Site/New';
import SiteEdit from './Site/Edit';


const history = createBrowserHistory();

const Routes = () =>
  <Router history={history}>
    <Switch>
      <Route path="/sites/:id/edit" component={SiteEdit} />
      <Route path="/sites/new" component={SiteNew} />
      <Route path="/sites/" component={SiteIndex} />
    </Switch>
  </Router>;

export default Routes;
