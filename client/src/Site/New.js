import React, { Component } from 'react';
import SiteForm from './Form';

class SiteNew extends Component {
  render() {
      return(
        <div className="SiteNew" col-md-8 col-md-offset-2>
        <h2>New Site</h2>
        <SiteForm history={this.props.history} match={this.props.match} />
        </div>
      );
  }
}

export default SiteNew;
