import React, { Component } from 'react';

import PanelWrapper from './PanelWrapper';
import EditFeaturedImage from '../EditFeaturedImage';
import Capitalize from '../../../../service/capitalize';
import PanelEditCustomList from './PanelEditCustomList';
import PanelEditCustomInput from './PanelEditCustomInput';
import Button from '../../../../components/Button';
import update from 'immutability-helper';
import _ from 'lodash';
import * as actionCreators from '../../../../action';
import { connect } from 'react-redux';
class PanelEditCustom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemIndex: 0,
    };
  }
  arrayObj(arg) {
    var obj = arg;
    let arr = Object.keys(obj).map(function(key, index) {
      return {
        [key]: obj[key],
      };
    });
    return arr;
  }

  handleContentChange = (e, customKey, itemId, itemChildKey, inputType) => {
    this.props.handleContentChange(
      e,
      customKey,
      itemId,
      itemChildKey,
      inputType
    );
  };
  handleImagePreview = (e, customKey, itemId, itemChildKey, inputType) => {
    this.props.handleImagePreview(
      e,
      customKey,
      itemId,
      itemChildKey,
      inputType
    );
  };
  removeSrcString(arg, itemChildKey) {
    let obj = _.cloneDeep(arg);
    Object.keys(obj).map(key => {
      if (
        Number(this.props.projectState.panel.customItemIndex) === Number(key)
      ) {
        obj[key][itemChildKey].src = '';
      }
    });
    return obj;
  }
  handleImageDelete = (e, index, itemChildKey) => {
    this.props.projectStateRemoveImage({
      customKey: this.props.projectState.panel.customKey,
      customKeyArray: this.removeSrcString(
        this.props.projectState.state.present.body_elements[
          this.props.projectState.panel.customKey
        ],
        itemChildKey
      ),
    });
    !this.props.projectState.panel.isSave
      ? this.props.projectStateEnableSave()
      : null;
  };
  handleContentDelete = (customKey, customItemIndex) => {
    let obj = _.cloneDeep(this.props.projectState.state.present.body_elements);
    let newCustomItemIndex = customItemIndex;
    obj[customKey].splice(customItemIndex, 1);
    if (customItemIndex >= obj[customKey].length - 1) {
      newCustomItemIndex = obj[customKey].length - 1;
    }
    this.props.projectStateDeleteItem({
      customKey: customKey,
      customKeyArray: obj[customKey],
      customItemIndex: newCustomItemIndex,
    });
    !this.props.projectState.panel.isSave
      ? this.props.projectStateEnableSave()
      : null;
  };
  render() {
    const elementsArray = this.arrayObj(
      this.props.elements[this.props.projectState.panel.customItemIndex]
    );
    return (
      <PanelWrapper
        title={Capitalize(this.props.customKey)}
        idName="featureCustom"
      >
        <div className="adjustWrap">
          <PanelEditCustomList elements={this.props.elements} />
          {elementsArray.map((item, index) => {
            if (item[Object.keys(item)]['src'] !== undefined) {
              let itemChildKey = Object.keys(item)[0];
              return (
                <div className="adjustImagWrap" key={itemChildKey + '_src'}>
                  <EditFeaturedImage
                    onChange={(e, inputType) =>
                      this.handleImagePreview(
                        e,
                        this.props.customKey,
                        this.props.projectState.panel.customItemIndex,
                        itemChildKey,
                        'src'
                      )
                    }
                    boxImage={
                      this.props.elements[
                        this.props.projectState.panel.customItemIndex
                      ][itemChildKey]['src']
                    }
                    handleImageDelete={e =>
                      this.handleImageDelete(e, index, itemChildKey)
                    }
                  />
                </div>
              );
            } else {
              return null;
            }
          })}

          {elementsArray.map((item, index) => {
            if (item[Object.keys(item)]['src'] === undefined) {
              let customKey = Object.keys(item)[0];
              return (
                <PanelEditCustomInput
                  title={customKey}
                  key={index}
                  data={
                    this.props.elements[
                      this.props.projectState.panel.customItemIndex
                    ][customKey]
                  }
                  handleContentChange={(e, inputType) =>
                    this.handleContentChange(
                      e,
                      this.props.customKey,
                      this.props.projectState.panel.customItemIndex,
                      customKey,
                      inputType
                    )
                  }
                />
              );
            } else {
              return null;
            }
          })}

          {this.props.projectState.state.present.body_elements[
            this.props.projectState.panel.customKey
          ].length > 1 ? (
            <div className="padd alignRight">
              {' '}
              <Button
                Warning
                Outline
                Small
                onClick={e =>
                  this.handleContentDelete(
                    this.props.projectState.panel.customKey,
                    this.props.projectState.panel.customItemIndex
                  )
                }
              >
                Remove this content
              </Button>
            </div>
          ) : null}
        </div>
      </PanelWrapper>
    );
  }
}

const mapStateToProps = store => ({
  projectState: store.projectState,
});
export default connect(
  mapStateToProps,
  actionCreators
)(PanelEditCustom);
