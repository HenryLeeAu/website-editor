import React from 'react';
import PanelWrapper from './PanelWrapper';

import AdjustColor from '../adjust/AdjustColor';
import AdjustBackgroundImage from '../adjust/AdjustBackgroundImage';
const PanelEditorContainer = props => {
  return (
    <PanelWrapper title={props.mainTitle} idName="featureLogo">
      <div className="section">
        <h3>Background</h3>
        <AdjustColor title="color" />
        <AdjustBackgroundImage title="Image" />
      </div>
    </PanelWrapper>
  );
};
export default PanelEditorContainer;
