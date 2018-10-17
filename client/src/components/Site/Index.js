import React, { Component } from 'react';
import axiosClient from '../../axiosClient';

class SiteIndex extends Component {
  constructor(props) {
    super(props);
    this.state = { sites: [] };
  }

  componentWillMount() {
    axiosClient.get('/sites.json').then(response => {
      this.setState({ sites: response.data });
    });
  }

  render() {
    return (
      <div className="SiteIndex col-md-12" style={{ marginTop: 10 }}>
        <div className="clearfix">
          <div className="pull-right">
            <button
              onClick={e => this.handleNewSite()}
              className="button">
              New Site
            </button>
          </div>
        </div>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Address</th>
            <th>City</th>
            <th>Description</th>
            <th>Latitude</th>
            <th>Longitude</th>
          </tr>
        </thead>
      <tbody>
        {this.renderTableBody()}
      </tbody>
    </table>
  </div>
    );
  }

  handleNewSite() {
    this.props.history.push('/sites/new');
  }

  renderTableBody() {
    return this.state.sites.map(site => {
      return (
        <tr key={site.id}>
          <td>
            {site.id}
          </td>
          <td>
            {site.name}
          </td>
          <td>
            {site.address}
          </td>
          <td>
            {site.city}
          </td>
          <td>
            {site.description}
          </td>
          <td>
            {site.lat}
          </td>
          <td>
            {site.lng}
          </td>
          <td>
            <button
            onClick={e => this.handleEdit(site.id)}
            className="btn btn-primary">
            Edit
            </button>
            &nbsp;
            <button
            onClick={e => this.handleRemove(site.id)}
            className="btn btn-danger">
            Remove
            </button>
          </td>
        </tr>
      );
    });
  }

  handleEdit(siteId) {
    this.props.history.push(`/sites/${siteId}/edit`);
  }

  handleRemove(siteId) {
    let sites = this.state.sites;
    sites = sites.filter(site => {
      return site.id !== site.id;
    });
    this.setState({ sites: sites });
    axiosClient.delete(`sites/${siteId}`);
  }
}

export default SiteIndex;
