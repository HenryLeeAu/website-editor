import React, { Component } from 'react';

class AdjustRepeat extends Component {
  render() {
    return (
      <div className="alignCenter ">
        <select>
          <option value="">Repeat X</option>
          <option value="">Repeat Y</option>
          <option value="">Repeat </option>
          <option value="">No repeat </option>
        </select>
      </div>
    );
  }
}

export default AdjustRepeat;
