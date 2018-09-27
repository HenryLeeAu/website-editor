import React, { Component } from 'react';

class AdjustRange extends Component {
  render() {
    return (
      <div className="adjustBackgroundImage lively-table adjustWrap ">
        <div className="adjustTitle">{this.props.title}</div>
        <div className="adjustContent">
          <input type="range" />
        </div>
      </div>
    );
  }
}

export default AdjustRange;
