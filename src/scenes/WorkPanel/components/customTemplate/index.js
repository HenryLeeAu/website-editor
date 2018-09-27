import React, { Component } from 'react';
import 'babel-polyfill';
import CustomContainer from './CustomContainer';
import Parser from 'html-react-parser';
import * as actionCreators from '../../../../action';
import { connect } from 'react-redux';

class CustomerTemplate extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { projectState } = this.props;
    const options = {
      replace: domNode => {
        if (!domNode.attribs) return null;
        if (domNode.attribs && domNode.name === 'idg-container') {
          // domNode will meet idg-container first
          return (
            <CustomContainer
              containerKey={domNode.attribs.key}
              containerState={
                projectState.state.present.body_elements[domNode.attribs.key]
              }
              containerTemplate={domNode.children}
            />
          );
        }
      },
    };
    return (
      <div>
        <div id="customerTemplateWrap">
          {projectState.template
            ? Parser(projectState.template, options)
            : null}
        </div>
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
)(CustomerTemplate);
