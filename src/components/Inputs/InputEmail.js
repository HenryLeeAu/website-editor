import React, { Component } from 'react'
import Input from '../Input'


class InputEmail extends Component {
  render() {
    return (
      <div>
     <Input 
      type="email" 
      placeholder="name@idg.com.au"  
      id={this.props.id} 
      name={this.props.name}
      value={this.props.value}
      onChange={this.props.onChange}  />
    </div>)
  }
}

export default InputEmail;
