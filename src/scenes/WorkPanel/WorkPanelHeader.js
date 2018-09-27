import React, { Component } from 'react';
import ProjectStatus from '../../components/ProjectStatus';
import SaveStatus from './components/SaveStatus';
import IconArrowBack from '../../media/arrow-back.svg';
import { Link } from 'react-router-dom';
import Settings from './components/Settings';
import { connect } from 'react-redux';
import * as actionCreators from '../../action';
//TODO: show modal need to be rewrite by redux
class WorkPanelHeader extends Component {
  constructor(props) {
    super(props);
  }

  handleLeaveProject = () => {
    this.props.onSettingsLeave({ settings: {} });
    this.props.onProjectLeave({ projectState: {} });
  };

  render() {
    const { settingsOpen, settings } = this.props;
    return (
      <div className="workPanelHeader cf">
        <div className="lively-left lively-table">
          <Link to="/" className="back" onClick={this.handleLeaveProject}>
            <img src={IconArrowBack} alt="" />
          </Link>
          <div>
            <ProjectStatus status={settings.is_published} />
            <button className="settings" onClick={() => settingsOpen(true)}>
              {settings.title || ''}
            </button>
          </div>
        </div>
        <div className="lively-right lively-table">
          <div>
            <SaveStatus />
          </div>
          {/*<div>
            <div className="paddL">
            <Button Secondary>Preview</Button>
            </div>
          </div>*/}
          <div>
            <div className="paddL">
              {/* <Button Warning >Publish</Button>*/}
            </div>
          </div>
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
)(WorkPanelHeader);
