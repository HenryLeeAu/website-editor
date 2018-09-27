import React, { Component } from 'react';

class AdjustSize extends Component {
  render() {
    return (
      <div className="alignCenter ">
        <select>
          <option value="">14px</option>
          <option value="">15px</option>
          <option value="">16px </option>
          <option value="">17px </option>
        </select>
      </div>
    );
  }
}

export default AdjustSize;
