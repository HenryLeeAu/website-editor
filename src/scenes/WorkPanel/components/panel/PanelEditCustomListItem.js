import React, { Component } from 'react';
import * as actionCreators from '../../../../action';
import { connect } from 'react-redux';
import capitalize from '../../../../service/capitalize';
class PanelEditCustomListItem extends Component {
  componentWillReceiveProps(nextProps) {}
  getPreviewImage(arg) {
    let src = '';
    let getUrl = true;
    Object.keys(arg).map(function(key) {
      if (arg[key].src && arg[key].src.length > 0 && getUrl === true) {
        src = arg[key].src;
        getUrl = false;
      }
    });

    return src;
  }
  render() {
    const { projectState } = this.props;
    let srcUrl = this.getPreviewImage(
      projectState.state.present.body_elements[projectState.panel.customKey][
        this.props.index
      ]
    );
    //console.log(this.getPreviewImage(this.props.projectState.state.present.body_elements[this.props.projectState.panel.customKey][this.props.index]))
    return (
      <span
        className={
          Number(this.props.index) ===
          Number(this.props.projectState.panel.customItemIndex)
            ? 'imagePreview selected'
            : 'imagePreview'
        }
        style={{ backgroundImage: 'url(' + srcUrl + ')' }}
        onClick={e => this.props.handleItemChange(e)}
      >
        <div>
          {' '}
          {srcUrl
            ? '  '
            : capitalize(projectState.panel.customKey) +
              (Number(this.props.index) + 1)}{' '}
        </div>
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
)(PanelEditCustomListItem);
