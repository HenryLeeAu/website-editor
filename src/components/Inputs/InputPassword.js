import React, { Component } from 'react'
import Input from '../Input'


class InputPassword extends Component {
  render() {
    return (
      <div>
     <Input
      type="password"
      placeholder="your password"
      className="warning"
      id={this.props.id}
      name={this.props.name}
      value={this.props.value}
      onChange={this.props.onChange} / >
    </div>)
  }
}

export default InputPassword;
