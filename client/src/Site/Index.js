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
      <div>
      <button
      onClick={e => this.handleNewSite()}
      className="button">
      New Site
      </button>
      </div>
    );
  }

  handleNewSite() {
    this.props.history.push('/sites/new');
  }

  handleEdit(siteId) {
    let sites = this.state.sites;
    sites = sites.filter(site => {
      return site.id !== siteId;
    });
    this.setState({ books: books });
    axiosClient.delete(`sites/${siteId}`);
  }
}

export default SiteIndex;
