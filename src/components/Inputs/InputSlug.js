import React, { Component } from 'react'
import Input from '../Input'


class InputSlug extends Component {
  constructor(props) {
    super(props);
  
  }
  
  render() {
    return (
       <div className="cf padd">
          <div className="col-3 padd alignRight">
            <label htmlFor="slug">
              Slug(url)<span className="colorWarning">*</span>
            </label>
          </div>
          <div  className="col-9">
             <Input 
              type = "text" 
              value = {this.props.value || ""}
              onChange = {this.props.onChange}
              className="slug" id="slug" />
          </div>
        </div>
      )
  }
}



export default InputSlug