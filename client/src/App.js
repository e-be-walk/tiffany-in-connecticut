import React, { Component } from 'react';
import './App.css';
import { Switch, HashRouter as Router, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import SiteIndex from './Site/Index';
import SiteNew from './Site/New';
import SiteEdit from './Site/Edit';


class App extends Component {
  render() {
    /*will need a way to check users/authentication*/

    /* the following route should be used for the overall site and should probably not be within the sites routes- need to fix
    <Route path="/" component={ showHeader } />
    <Route path="/" component={ showMain } />
    <Route path="/sites/:id" component={Site} />*/
    const siteRoutes = (
      <div>
      <Route path="/sites/:id/edit" component={SiteEdit} />
      <Route path="/sites/new" component={SiteNew} />
      <Route path="/sites/" component={SiteIndex} />
      </div>
    )

    return (
      <div className="App">
        <header className="App-header">
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
