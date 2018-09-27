import React, { Component } from 'react';
import Button from '../../../../components/Button';

//import SaveStatusStyles from './SaveStatusStyles';
import { connect } from 'react-redux';
import * as actionCreators from '../../../../action';
class PanelAction extends Component {
  handleUpload = () => {
    const loadObject = {
      title: this.props.settings.title,
      sites: this.props.settings.sites,
      state: this.props.projectState.state.present,
    };
    this.props.projectState.panel.page
      ? this.props.updateProject(
          this.props.projectState.id,
          loadObject,
          'projectStatePage'
        )
      : this.props.updateProject(
          this.props.projectState.id,
          loadObject,
          'projectStateCustom'
        );
  };
  handleCancel = () => {
    this.props.projectStateCancelSave();
    if (!this.props.projectState.panel.page) {
      this.props.projectStateCloseCustomPanel();
    }

    this.props.projectStateDisableSave();
  };

  CancelButton() {
    if (this.props.projectState.panel.page) {
      if (this.props.projectState.panel.isSave) {
        return (
          <Button Secondary Outline onClick={this.handleCancel}>
            Cancel
          </Button>
        );
      } else {
        return (
          <Button Secondary disabled Outline>
            Cancel
          </Button>
        );
      }
    } else {
      return (
        <Button Secondary Outline onClick={this.handleCancel}>
          Cancel
        </Button>
      );
    }
  }
  render() {
    return (
      <div className="featureAction">
        <div className="lively-inlineBlock padd">{this.CancelButton()}</div>
        <div className="lively-inlineBlock padd">
          {this.props.projectState.panel.isSave ? (
            <Button Primary onClick={this.handleUpload}>
              Save
            </Button>
          ) : (
            <Button Primary disabled>
              Save
            </Button>
          )}
        </div>
      </div>
    );
  }
}
const mapStateToProps = store => ({
  settings: store.settings,
  projectState: store.projectState,
});
export default connect(
  mapStateToProps,
  actionCreators
)(PanelAction);
