import React, { Component } from 'react';
import AdjustColorButton from './AdjustColorButton';
import AdjustFontFamily from './AdjustFontFamily';
import AdjustSize from './AdjustSize';
class AdjustBackgroundImage extends Component {
  render() {
    return (
      <div className="adjustBackgroundImage lively-table adjustWrap ">
        <div className="adjustTitle">{this.props.title}</div>
        <div className="adjustContent">
          <div className="adjustBase lively-table">
            <AdjustColorButton />
            <AdjustSize />
            <AdjustFontFamily />
          </div>
        </div>
      </div>
    );
  }
}

export default AdjustBackgroundImage;
