import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route } from 'react-router-dom';

import LoginForm from './User/Login';
import NewUserForm from './User/New';
import SiteIndex from './Site/Index';
import SiteNew from './Site/New';
import SiteEdit from './Site/Edit';

import { connect } from 'react-redux';


class App extends Component {

  render(){
    const isAuthenticated = this.props.session.auth.isAuthenticated;
    const currentUser = this.props.session.current_user;

    const userRoutes = (
      <div>
        <Route path="/users/new" component={NewUserForm} />
        <Route path="/users/login" component={LoginForm} />
      </div>
    )

    const siteRoutes = (
      <div>
        <Route path="/sites/:id/edit" component={SiteEdit} />
        <Route path="/sites/new" component={SiteNew} />
        <Route path="/sites/" component={SiteIndex} />
      </div>
    )

    return(
      <Router>
      <div className="App">
        { isAuthenticated ? siteRoutes : userRoutes }
      </div>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  console.log(state)
  return {session: state.session}
}
export default connect(mapStateToProps)(App);
