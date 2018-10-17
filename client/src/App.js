import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Login from './components/User/Login';
import Logout from './components/User/Logout';
import SiteIndex from './components/Site/Index';
import SiteNew from './components/Site/New';
import SiteEdit from './components/Site/Edit';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Tiffany in Connecticut</h1>
          <Navbar />
        </header>
        <div className="App-body">
          <Route path="/sites/:id/edit" component={SiteEdit} />
          <Route path="/sites/new" component={SiteNew} />
          <Route path="/sites/" component={SiteIndex} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/logout" component={Logout} />
        </div>
      </div>
    );
  }
}

export default App;
