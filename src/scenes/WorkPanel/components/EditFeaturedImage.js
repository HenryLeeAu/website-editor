import React, { Component } from 'react';
import './EditFeaturedImage.css';

import iconDelete from '../../../media/icon-delete.png';
class EditFeaturedImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: '',
      imagePreviewUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/NBC_logo.svg/567px-NBC_logo.svg.png',
    };
  }

  render() {
    return (
      <div className="editFeaturedImage">
        <div className="">
          {this.props.logo ? (
            <span className="logo">
              {' '}
              <img src={this.props.logo} alt="" />{' '}
            </span>
          ) : this.props.boxImage ? (
            <span
              className="boxImage"
              style={{ backgroundImage: 'url(' + this.props.boxImage + ')' }}
            />
          ) : (
            <span className="boxImage noImage">No Image</span>
          )}

          <button className="upload">Upload</button>
          <input
            className="uploadFile"
            name="myFile"
            type="file"
            accept="image/*"
            onChange={this.props.onChange}
          />

          {this.props.boxImage ? (
            <button
              className="deletePhoto"
              onClick={e => this.props.handleImageDelete(e)}
            >
              <img src={iconDelete} />
            </button>
          ) : null}
        </div>
      </div>
    );
  }
}

export default EditFeaturedImage;
