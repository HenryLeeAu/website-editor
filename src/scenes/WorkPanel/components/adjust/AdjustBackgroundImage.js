import React, { Component } from 'react';
import AdjustColorButton from './AdjustColorButton';
import AdjustPositionNine from './AdjustPositionNine';
import AdjustRepeat from './AdjustRepeat';
class AdjustBackgroundImage extends Component {
  render() {
    return (
      <div className="adjustBackgroundImage lively-table adjustWrap ">
        <div className="adjustTitle">{this.props.title}</div>
        <div className="adjustContent">
          <div className="adjustBase lively-table">
            <AdjustColorButton />
            <AdjustRepeat />
            <AdjustPositionNine />
          </div>
        </div>
      </div>
    );
  }
}

export default AdjustBackgroundImage;
