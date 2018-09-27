import React, { Component } from 'react';
import Button from '../../components/Button';
import Close from '../../media/close-white.svg';
import * as actionCreators from '../../action';
import { connect } from 'react-redux';

class TemplatePreview extends Component {
  onTemplateListPreviewClose() {
    this.props.templateListPreviewClose({ open: false });
  }
  onTemplateListCreateProjectOpen() {
    this.props.createProjectOpen({ open: true });
  }
  render() {
    const { templateList } = this.props;
    return (
      <div className="modalWrapper">
        <div className="previewContent">
          <button
            className="close"
            onClick={() => this.onTemplateListPreviewClose()}
          >
            <img src={Close} alt="" />
          </button>
          {/* TODO:iframe url <iframe src="https://www.computerworld.com.au/netscout/"></iframe>*/}
          <div
            className="previewConfirmed"
            onClick={() => this.onTemplateListCreateProjectOpen()}
          >
            <Button Primary Large className="">
              Use this template
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = store => ({
  templateList: store.templateList,
});
export default connect(
  mapStateToProps,
  actionCreators
)(TemplatePreview);
