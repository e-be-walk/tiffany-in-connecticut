import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route } from 'react-router-dom';

import Login from './Components/User/Login';
import Logout from './Components/User/Logout';
import SiteIndex from './Components/Site/Index';
import SiteNew from './Components/Site/New';
import SiteEdit from './Components/Site/Edit';

import { connect } from 'react-redux';


class App extends Component {

  render(){
    //const isAuthenticated = this.props.session.auth.isAuthenticated;
    //const currentUser = this.props.session.current_user;

    const userRoutes = (
      <div>
        <Route path="/users/login" component={Login} />
        <Route path="/users/logout" component={Logout} />
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
      <>
      </>
    );
  }
}

const mapStateToProps = state => {
  console.log(state)
  return {session: state.session}
}
export default connect(mapStateToProps)(App);
