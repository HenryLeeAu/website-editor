import React, { Component } from 'react'
import Input from '../Input'

import update from 'immutability-helper'; 
class InputProjectName extends Component {
  constructor(props) {
    super(props);
    this.state={
      empty:false,
    }
  
  }
  handleBlur = (e) =>{
    console.log(e.target.value)
    e.target.value !== "" ? this.setState({empty:false}) : this.setState({empty:true})
  }

  render() {
    return (
       <div className="cf padd">
          <div className="col-3 padd alignRight">
            <label htmlFor="project_name">
              Project Name<span className="colorWarning">*</span>
            </label>
          </div>
          <div id="" className="col-9">
             <Input 
              type = "text" 
              value = {this.props.value || ""}
              onChange = {this.props.onChange}
              onBlur ={this.handleBlur}
              placeholder = "my project Name"
              className={this.state.empty ? "project_name warning" : "project_name"} id="project_name" />
            
             { this.state.empty ? <div className="colorWarning">Project name can't be empty</div> : null}
          </div>
        </div>
      )
  }
}





export default InputProjectName
