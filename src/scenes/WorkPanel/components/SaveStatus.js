import React, { Component } from 'react';

import SaveStatusStyles from './SaveStatusStyles';
import { connect } from 'react-redux';
import * as actionCreators from '../../../action';
/*
Status
  <SaveStatusStyles Success>Saved at 12:07 30/06</SaveStatusStyles>
  <SaveStatusStyles Saving>Saving........</SaveStatusStyles>
  <SaveStatusStyles Failed>Failed</SaveStatusStyles>
*/

//projectStateSaveingStart projectStateSaveingFinish
class SaveStatus extends Component {
  render() {
    const { projectState } = this.props;
    return (
      <span>
        {projectState.saveState === 'saving' ? (
          <SaveStatusStyles Saving>Saving........</SaveStatusStyles>
        ) : null
        //{this.handleSaveState()}
        }
        {projectState.saveState === 'finish' ? (
          <SaveStatusStyles Success>
            Last saved at {projectState.saveTime}
          </SaveStatusStyles>
        ) : null
        //{this.handleSaveState()}
        }
      </span>
    );
  }
}

const mapStateToProps = store => ({
  projectState: store.projectState,
});

export default connect(
  mapStateToProps,
  actionCreators
)(SaveStatus);
