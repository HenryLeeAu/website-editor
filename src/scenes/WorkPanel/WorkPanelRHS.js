import React, { Component } from 'react';

import PanelPageStyle from './components/panel/PanelPageStyle';
import PanelEditCustom from './components/panel/PanelEditCustom';

import update from 'immutability-helper';
import * as actionCreators from '../../action';
import { connect } from 'react-redux';

class WorkPanelRHS extends Component {
  constructor() {
    super();
    this.state = {
      state: {
        custom_media: {},
        body_elements: {},
      },
    };
  }
  handleMediaChange = (e, category) => {
    console.log(e, category);
    this.setState(
      update(this.state, {
        state: {
          custom_media: {
            [category]: { $set: e.target.value },
          },
        },
      }),
      e => {
        this.props.projectStateCustomMediaUpdate({
          custom_media: this.state.state.custom_media,
        });
        !this.props.projectState.panel.isSave
          ? this.props.projectStateEnableSave()
          : null;
      }
    );
  };
  handleChangeCustomMedia = (e, key) => {
    this.setState(
      update(this.state, {
        state: {
          custom_media: {
            [key]: { $set: e.target.value },
          },
        },
      }),
      e => {
        console.log(e);
        // console.log(this.state.custom_media[key])
      }
    );
  };

  componentWillReceiveProps(nextProps) {
    this.setState(
      update(this.state, {
        state: { $set: nextProps.projectState.state.present },
      })
    );
  }

  handleImagePreview = (e, customKey, itemId, itemChildKey, inputType) => {
    let reader = new FileReader();
    let file = e.target.files[0];
    console.log(e);
    if (file) {
      reader.onloadend = e => {
        console.log(e.target.result);
        this.props.uploadImage(
          e,
          customKey,
          itemId,
          itemChildKey,
          inputType,
          this.handleContentChange
        );
      };
      reader.readAsDataURL(file);
    }
  };
  handleContentChange = (
    updateValue,
    customKey,
    itemId,
    itemChildKey,
    inputType,
    e
  ) => {
    console.log(updateValue, itemId, itemChildKey, customKey, inputType);
    update.extend('$implementValue', (value, object) => {
      console.log(value, object);
      switch (inputType) {
        case 'src':
          return update(object, { $set: updateValue });

        case 'href':
          if (updateValue.length === 0) {
            return update(object, { $set: '#' });
          } else {
            return update(object, value);
          }

        case 'class':
          return update(object, {
            $set: updateValue.replace(/ /g, '').split(','),
          });

        case 'target':
          if (e.target.checked === true) {
            return update(object, { $set: '_blank' });
          } else {
            return update(object, { $set: '_self' });
          }

        default:
          return update(object, value);
      }
    });
    this.setState(
      update(this.state, {
        state: {
          body_elements: {
            [customKey]: {
              [itemId]: {
                [itemChildKey]: {
                  [inputType]: { $implementValue: { $set: updateValue } },
                },
              },
            },
          },
        },
      }),
      () => {
        this.props.projectStateinputUpdate({
          body_elements: this.state.state.body_elements,
        });
        !this.props.projectState.panel.isSave
          ? this.props.projectStateEnableSave()
          : null;
      }
    );
  };
  render() {
    const { projectState } = this.props;

    return (
      <div>
        {projectState.panel.page ? (
          <PanelPageStyle
            handleChange={(e, category) => this.handleMediaChange(e, category)}
            valueCSS={
              this.state.state.custom_media.css
                ? this.state.state.custom_media.css
                : ''
            }
            valueJS={
              this.state.state.custom_media.js
                ? this.state.state.custom_media.js
                : ''
            }
          />
        ) : (
          <PanelEditCustom
            customKey={this.props.projectState.panel.customKey}
            elements={
              this.state.state.body_elements[
                this.props.projectState.panel.customKey
              ]
            }
            handleContentChange={(
              e,
              customKey,
              itemId,
              itemChildKey,
              inputType
            ) =>
              this.handleContentChange(
                e.target.value,
                customKey,
                itemId,
                itemChildKey,
                inputType,
                e
              )
            }
            handleImagePreview={(
              e,
              customKey,
              itemId,
              itemChildKey,
              inputType
            ) =>
              this.handleImagePreview(
                e,
                customKey,
                itemId,
                itemChildKey,
                inputType
              )
            }
          />
        )}
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
)(WorkPanelRHS);
