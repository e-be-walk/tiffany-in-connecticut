import React from 'react';
import './App.css';
import { Switch, Router, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import LoginForm from './User/Login';
import NewUserForm from './User/New';
import SiteIndex from './Site/Index';
import SiteNew from './Site/New';
import SiteEdit from './Site/Edit';


const history = createBrowserHistory();

const Routes = () =>
  <Router history={history}>
    <Switch>
      <Route path="/users/new" component={NewUserForm} />
      <Route path="/users/login" component={LoginForm} />
      <Route path="/sites/:id/edit" component={SiteEdit} />
      <Route path="/sites/new" component={SiteNew} />
      <Route path="/sites/" component={SiteIndex} />
    </Switch>
  </Router>;

export default Routes;
