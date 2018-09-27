import React, { Component } from 'react';
import domToReact from 'html-react-parser/lib/dom-to-react';
import CustomContainerList from './CustomContainerList';
class CustomContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const options = {
      replace: domNode => {
        if (!domNode.attribs) return null;
        if (domNode.attribs && domNode.name === 'idg-container-item') {
          /*when meet idg-container-item */

          return (
            <CustomContainerList
              itemTemplate={domNode.children /*pass item template */}
              containerState={this.props.containerState /*pass item status */}
              containerKey={
                this.props
                  .containerKey /*pass key name inorfer to click and reflict the key in state */
              }
            />
          );
        }
      },
    };

    return (
      <span>
        {domToReact(
          this.props.containerTemplate,
          options
        ) /*render other normal tag first*/}
      </span>
    );
  }
}

export default CustomContainer;
