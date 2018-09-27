
import React, { Component } from 'react'
import styled from 'styled-components'
import { css } from 'styled-components'
import './ModalWrapper.css'
import Button from './Button'
import Close from '../media/close.svg'
import PanelClose from '../components/PanelClose'

class ModalWrapper extends Component {
 
  render() {
    return (
      <div className="modalWrapper">
        <div className={"modalContent" + " "+ (this.props.large?'large':'' )}>
          <div className="header paddL">
            <h2>{this.props.title}</h2>
          </div>
          <PanelClose onClick={this.props.onClose}><img src={Close} alt=""></img> </PanelClose>
          <div className="content paddL cf">
              {this.props.children}
          </div>      
         
           <div className="buttonWrap padd alignRight">
            <Button Secondary Outline onClick={this.props.onClose}>{this.props.returnText}</Button>
            <Button Primary  disabled={false} className="disable" onClick={this.props.onSave}>{this.props.confirmedText}</Button>
          </div>
        </div>
       
       
      </div>
    

    )
  }
}

export default ModalWrapper;
