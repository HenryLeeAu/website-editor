import React, { Component } from 'react';
import PanelWrapper from './PanelWrapper';

import AdjustColor from '../adjust/AdjustColor';
import AdjustBackgroundImage from '../adjust/AdjustBackgroundImage';
import AdjustCustomizedCode from '../adjust/AdjustCustomizedCode';
import AdjustFont from '../adjust/AdjustFont';
import AdjustRange from '../adjust/AdjustRange';

class PanelPageStyle extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleChange = (e, category) => {
    this.props.handleChange(e, category);
    console.log(e.target.value);
  };
  render() {
    return (
      <PanelWrapper title="Page" idName="featureLogo">
        {/*
         <div className="section"> 
          <h3>Background</h3>
          <AdjustColor title="color"/>
          <AdjustBackgroundImage title="Image"/>
        </div>
        <div className="section"> 
          <h3>Font</h3>
          <AdjustFont title="base"/>
          <AdjustFont title="heading 1"/>
          <AdjustFont title="heading 2"/>
          <AdjustFont title="heading 3"/>
        </div>
        <div className="section">
          <h3>Space</h3>
          <AdjustRange title="Top"/>
          <AdjustRange title="Bottom" />
          
        </div>*/}
        <div className="section">
          <p className="lively-p">
            You can click each section via left screen to edit content
          </p>
        </div>

        <div className="section">
          <h3>Customized</h3>
          <AdjustCustomizedCode
            title="CSS"
            value={this.props.valueCSS}
            onChange={e => this.handleChange(e, 'css')}
          />
          <AdjustCustomizedCode
            title="Javascript"
            value={this.props.valueJS}
            onChange={e => this.handleChange(e, 'js')}
          />
        </div>
      </PanelWrapper>
    );
  }
}

export default PanelPageStyle;
