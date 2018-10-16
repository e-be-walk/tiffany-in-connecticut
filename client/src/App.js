import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route } from 'react-router-dom';

import Login from './components/User/Login';
import Logout from './components/User/Logout';
import SiteIndex from './components/Site/Index';
import SiteNew from './components/Site/New';
import SiteEdit from './components/Site/Edit';

import { connect } from 'react-redux';


class App extends Component {

  render(){
    //const isAuthenticated = this.props.session.auth.isAuthenticated;
    const currentUser = this.props.session.current_user;

    const userRoutes = (
      <div>
        <Route path="/users/login" component={Login} />
        <Route path="/users/logout" component={Logout} />
        <Route path="/sites/:id/edit" component={SiteEdit} />
        <Route path="/sites/new" component={SiteNew} />
        <Route path="/sites/" component={SiteIndex} />
      </div>
    )

    const visitorRoutes = (
      <div>
        <Route path="/users/login" component={Login} />
      </div>
    )

    return(
      <Router>
      <div className="App">

       {userRoutes}

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
