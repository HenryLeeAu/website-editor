import React, { Component } from 'react';
import './PanelWrapper.css';
import PanelAction from './PanelAction';
import PanelWrapperStyle from './PanelWrapperStyle';
import Close from '../../../../media/close.svg';
import PanelClose from '../../../../components/PanelClose';
import WarningPopup from '../../../../components/WarningPopup';
import { connect } from 'react-redux';
import * as actionCreators from '../../../../action';
class PanelWrapper extends Component {
  handleCancel = () => {
    this.props.projectStateCancelSave();
    if (!this.props.projectState.panel.page) {
      this.props.projectStateCloseCustomPanel();
    }

    this.props.projectStateDisableSave();
  };
  render() {
    return (
      <PanelWrapperStyle id="lively-panelRHS">
        <div id={this.props.idName}>
          <div className="wrap">
            <h2 className="title">
              {this.props.title}
              {!this.props.projectState.panel.page ? (
                <PanelClose onClick={this.handleCancel}>
                  <img src={Close} alt="" />{' '}
                </PanelClose>
              ) : null}
            </h2>
            {this.props.children}
          </div>
          {this.props.projectState.panel.alertMessage ? (
            <WarningPopup>
              Please save or cancel before changing the panel
            </WarningPopup>
          ) : null}
          {!this.props.featureMenu ? <PanelAction /> : null}
        </div>
      </PanelWrapperStyle>
    );
  }
}
const mapStateToProps = store => ({
  projectState: store.projectState,
});

export default connect(
  mapStateToProps,
  actionCreators
)(PanelWrapper);
