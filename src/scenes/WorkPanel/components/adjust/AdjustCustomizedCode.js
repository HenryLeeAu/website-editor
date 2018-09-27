import React, { Component } from 'react';

class AdjustCustomizedCode extends Component {
  handleChange = e => {
    console.log(e.target.value);
    this.props.onChange(e);
  };
  render() {
    return (
      <div className="adjustWrap ">
        <p className="lively-p">{this.props.title}</p>
        <textarea
          name=""
          id={this.props.title}
          rows="10"
          onChange={this.handleChange}
          value={this.props.value}
        >
          {this.props.children}
        </textarea>
      </div>
    );
  }
}

export default AdjustCustomizedCode;
