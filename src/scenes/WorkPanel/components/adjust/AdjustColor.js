import React, { Component } from 'react';
import { SketchPicker } from 'react-color';
import AdjustColorButton from './AdjustColorButton';
const test = () => {
  alert('show color picker');
};
class AdjustColor extends Component {
  state = {
    displayColorPicker: false,
  };

  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker });
  };

  handleClose = () => {
    this.setState({ displayColorPicker: false });
  };
  render() {
    const popover = {
      position: 'absolute',
      zIndex: '2',
    };
    const cover = {
      position: 'fixed',
      top: '0px',
      right: '0px',
      bottom: '0px',
      left: '0px',
    };
    return (
      <div className="adjustColor lively-table adjustWrap ">
        <div className="adjustTitle">{this.props.title}</div>
        <div className="adjustContent">
          <div className="adjustBase lively-table">
            <AdjustColorButton onClick={this.handleClick} />
            {this.state.displayColorPicker ? (
              <div style={popover}>
                <div style={cover} onClick={this.handleClose} />
                <SketchPicker />
              </div>
            ) : null}
            <div className="alignCenter upperCase" onClick={this.handleClick}>
              {' '}
              #ffffff
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AdjustColor;
