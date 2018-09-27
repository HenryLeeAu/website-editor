import React, { Component } from 'react';

class AdjustColorButton extends Component {
  render() {
    return (
      <div className="colorButton">
        <button onClick={this.props.onClick} />
      </div>
    );
  }
}

export default AdjustColorButton;
