import React, { Component } from 'react'
import Input from '../Input'


class InputSummary extends Component {
  constructor(props) {
    super(props);
  
  }
  
  render() {
    return (
      <div className="cf padd">
          <div className="col-3 padd alignRight">
            <label htmlFor="page-summary">
              Page summary
            </label>
          </div>
          <div  className="col-9">
            <Input type="text" className="page-summary" id="page-summary" 
           />
          </div>
        </div>
      )
  }
}



export default InputSummary