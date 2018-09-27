import React, { Component } from 'react';
import Button from '../../../../components/Button';
import PanelEditCustomListItem from './PanelEditCustomListItem';
import * as actionCreators from '../../../../action';
import { connect } from 'react-redux';
import _ from 'lodash';
class PanelEditCustomList extends Component {
  componentWillReceiveProps(nextProps) {}
  handleItemChange = (e, index) => {
    console.log(index, e);
    this.props.projectStateChangeCustomItemIndex({ customItemIndex: index });
    //this.props.handleItemChange(index)
  };
  handleListShow() {
    // console.log(this.props.elements.length)
    if (this.props.elements.length > 1) {
      return (
        <div className="section">
          <div className="widthFix">
            <div className="boxRowWrap">
              <div className="boxRow">
                {this.props.elements.map((item, index) => {
                  return (
                    <PanelEditCustomListItem
                      key={index}
                      handleItemChange={e => this.handleItemChange(e, index)}
                      index={index}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
  addItemDefaultValue(arg) {
    var obj = _.cloneDeep(arg);
    Object.keys(obj).map(function(key) {
      obj[key].text ? (obj[key].text = ' ') : null;
      obj[key].href ? (obj[key].href = '#') : null;
      obj[key].src ? (obj[key].src = '') : null;
    });
    console.log(arg, obj);
    return obj;
  }
  handleAddItem = () => {
    this.props.projectStateAddItem({
      customKey: this.props.projectState.panel.customKey,
      itemState: this.addItemDefaultValue(
        this.props.projectState.state.present.body_elements[
          this.props.projectState.panel.customKey
        ][0]
      ),
    });
    this.props.projectStateEnableSave();
  };
  render() {
    return (
      <div>
        <div className="cf">
          <Button Secondary Small onClick={this.handleAddItem}>
            + Add new content
          </Button>
          {/*
        this.props.elements.length > 1 ?   "  you can drag & drop to re-order them" : null
        */}
        </div>
        {this.handleListShow()}
      </div>
    );
  }
}

const mapStateToProps = store => ({
  projectState: store.projectState,
});
export default connect(
  mapStateToProps,
  actionCreators
)(PanelEditCustomList);
