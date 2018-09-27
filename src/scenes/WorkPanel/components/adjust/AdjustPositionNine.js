import React, { Component } from 'react';

class AdjustPositionNine extends Component {
  render() {
    return (
      <div className="alignCenter upperCase">
        <select>
          <option value="bottom_left">Top left </option>
          <option value="bottom_middle">Top middle </option>
          <option value="bottom_right">Top right </option>
          <option value="bottom_left">Middle left </option>
          <option value="bottom_left">Center </option>
          <option value="bottom_left">Middle right </option>
          <option value="bottom_left">Bottom left </option>
          <option value="bottom_middle">Bottom middle </option>
          <option value="bottom_right">Bottom right </option>
        </select>
      </div>
    );
  }
}

export default AdjustPositionNine;
