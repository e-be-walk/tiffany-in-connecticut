import React, { Component } from 'react';
import SiteForm from './Form';

class SiteEdit extends Component {
  render() {
    return (
      <div className="SiteEdit col-md-8 col-md-offset-2">
      <h2>Edit Site</h2>
      <SiteForm history={this.props.history} match={this.props.match} />
      </div>
    );
  }
}

export default SiteEdit;
