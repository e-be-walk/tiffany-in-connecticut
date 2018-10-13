import React, { Component } from 'react';
import axiosClient from '../axiosClient';

class SiteForm extends Component {
  state = {
    selectedSiteWindows: [],
    submitFormProgress: 0,
    isSubmittingForm: false,
    didFormSubmissionComplete: false,
    site: {
      id: this.props.match.params.id,
      name: '',
      address: '',
      city: '',
      description: '',
      lat: '',
      lng: '',
      errors: {}
    }
  };

  componentWillMount() {
    if (this.props.match.params.id) {
      axiosClient.get(`/sites/${this.props.match.params.id}`).then(response => {
        console.log(response.data);
        this.setState({
          selectedSiteWindows: response.data.cover_photos,
          book: {
            id: response.data.id,
            name: response.data.name,
            address: response.data.address,
            city: response.data.city,
            description: response.data.description,
            lat: response.data.lat,
            lng: response.data.lng,
            errors: {}
          }
        });
      });
    }
  }

  getNumberOfSelectedFiles() {
    return this.state.selectedSiteWindows.filter(el => {
      return el._destroy !== true;
    }).length;
  }

  render() {
    return (
      <div className="SiteForm">
        <form>
          <div className="form-group">
            <label>Name</label>
              <input
                type="text"
                onChange={e => this.handleSiteNameChange(e)}
                value={this.state.site.name}
                className="form-control"
              />
              {this.renderSiteNameInlineError()}
          </div>
          <div className="form-group">
            <label>Address</label>
              <input
                type="text"
                onChange={e => this.handleSiteAddressChange(e)}
                value={this.state.site.address}
                className="form-control"
              />
              {this.renderSiteAddressInlineError()}
          </div>
          <div className="form-group">
            <label>City</label>
              <input
                type="text"
                onChange={e => this.handleSiteCityChange(e)}
                value={this.state.site.city}
                className="form-control"
              />
              {this.renderSiteCityInlineError()}
          </div>
          <div className="form-group">
            <label>Description</label>
              <input
                type="text"
                onChange={e => this.handleSiteDescriptionChange(e)}
                value={this.state.site.description}
                className="form-control"
              />
              {this.renderSiteDescriptionInlineError()}
          </div>
          <div className="form-group">
            <label>Lattitude</label>
              <input
                type="text"
                onChange={e => this.handleSiteLatChange(e)}
                value={this.state.site.lat}
                className="form-control"
              />
              {this.renderSiteLatInlineError()}
          </div>
          <div className="form-group">
            <label>Longitude</label>
              <input
                type="text"
                onChange={e => this.handleSiteLngChange(e)}
                value={this.state.site.lng}
                className="form-control"
              />
              {this.renderSiteLngInlineError()}
          </div>
          <div className="form-group">
            <label>Windows</label>
            {this.renderUploadWindowsButton()}
            {this.renderSelectedSiteWindows()}
          </div>
          {this.renderUploadFormProgress()}
          <button
            disabled={this.state.isSubmittingForm}
            onClick={e => this.handleFormSubmit()}
            className="btn btn-primary">
            {this.state.isSubmittingForm ? 'Saving...' : 'Save'}
          </button>
          &nbsp;
          <button
            disabled={this.state.isSubmittingForm}
            onClick={e => this.handleCancel()}
            className="btn btn-default">
            Cancel
          </button>
        </form>
      <br />
    </div>
  );
}

renderUploadWindowsButton() {
  let numberOfSelectedWindows = this.getNumberOfSelectedFiles();
  return (
    <div>
    <input
    name="covers[]"
    ref={field => (this.siteWindowsField = field)}
    type="file"
    disabled={this.state.isSubmittingForm}
    multiple={true}
    accept="image/*"
    style={{
      width: 0.1,
      height: 0.1,
      opacity: 0,
      overflow: 'hidden',
      position: 'absolute',
      zIndex: -1
    }}
    id="site_windows"
    onChange={e => this.handleSiteWindowsChange(e)}
    className="form-control"
    />
    <label
      disabled={this.state.isSubmittingForm}
      className="button"
      htmlfor="site_windows">
      <span className="glyphicon glyphicon-cloud-upload" />
      &nbsp; &nbsp;
      {numberOfSelectedWindows === 0
        ? 'Upload Files'
        : `${numberOfSelectedWindows} file${numberOfSelectedWindows !== 1
          ? 's'
          : ''} selected`}
      </label>
    </div>
  );
}

renderSelectedSiteWindows() {
  let fileDOMs = this.state.selectedSiteWindows.map((el, index) =>{
    if (el._destroy) {
      return null;
    }

    return (
      <li key={index}>
      <div className="photo">
        <img
        width={150}
        src={el.id ? el.url : URL.createObjectURL(el)}
        style={{ alignSelf: 'center' }}
      />
      <div
      className="remove"
      onClick={() => this.removeSelectedSiteWindow(el, index)}>
      <span style={{ top: 2 }} className="glyphicon glyphicon-remove" />
      </div>
    </div>
    <div className="file-name">
    {el.name}
    </div>
    </li>
  );
});

return (
  <ul className="selected-windows">
  {fileDOMs}
  </ul>
);
}

renderUploadFormProgress() {
  if (this.state.isSubmittingForm === false) {
    return null;
  }

  return (
    <div className="progress">
      <div
        className={
          'progress-bar progress-bar-info progress-bar-striped' +
          (this.state.submitFormProgress < 100 ? 'active' : '')
        }
        role="progressbar"
        aria-valuenow={this.state.submitFormProgress}
        areaValuemin="0"
        areaValuemax="100"
        style={{ width: this.state.submitFormProgress + '%' }}>
        {this.state.submitFormProgress}% Complete
      </div>
    </div>
  );
}

removeSelectedSiteWindow(siteWindow, index) {
  let { selectedSiteWindows } = this.state;
  if (cover.id) {
    selectedSiteWindows[index]._destroy = true;
  } else {
    selectedSiteWindows.splice(index, 1);
  }

  this.setState({
    selectedSiteWindows: selectedSiteWindows
  });
}

handleSiteWindowsChange() {
  let selectedFiles = this.siteWindowsField.files;
  let { selectedSiteWindows } = this.state;
  for (let i = 0; i < selectedFiles.length; i++) {
    selectedSiteWindows.push(selectedFiles.item(i));
  }

  this.setState(
    {
      selectedSiteWindows: selectedSiteWindows
    },
    () => {
      this.siteWindowsField.value = null;
    }
  );
}

handleSiteNameChange(e) {
  let { site } = this.state;
  site.name = e.target.value;
  this.setState({ site: site });
}

handleSiteAddressChange(e) {
  let { site } = this.state;
  site.address = e.target.value;
  this.setState({ site: site });
}

handleSiteCityChange(e) {
  let { site } = this.state;
  site.city = e.target.value;
  this.setState({ site: site });
}

handleSiteDescriptionChange(e) {
  let { site } = this.state;
  site.description = e.target.value;
  this.setState({ site: site });
}

handleSiteLatChange(e) {
  let { site } = this.state;
  site.lat = e.target.value;
  this.setState({ site: site });
}

handleSiteLngChange(e) {
  let { site } = this.state;
  site.lng = e.target.value;
  this.setState({ site: site });
}
//handle rendering errors for fields

handleCancel() {
  this.props.history.push('/sites');
}
}
