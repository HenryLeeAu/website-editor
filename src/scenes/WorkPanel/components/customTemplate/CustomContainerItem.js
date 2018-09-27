import React, { Component } from 'react';
import domToReact from 'html-react-parser/lib/dom-to-react';

class CustomerCountainerItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: this.props.item,
    };
  }
  covertClassName(state) {
    const data = { ...state }; //deep copy
    if (data['class']) {
      data['className'] = data['class']
        .toString()
        .split(',')
        .join(' ');
      delete data['class'];
    }
    return data;
  }
  render() {
    const options = {
      replace: domNode => {
        if (!domNode.attribs) return;

        if (domNode.attribs.idg_edit) {
          //filiter out text and class in order to append attribute and className
          const data = this.covertClassName(
            this.props.itemState[domNode.attribs.idg_edit]
          );
          let text = data['text'] || '';
          delete data['text'];

          //When tag is <a>
          if (domNode.name === 'a') {
            //detect if text exising
            if (this.props.itemState[domNode.attribs.idg_edit]['text']) {
              return <domNode.name {...data}> {text}</domNode.name>;
            } else {
              return (
                <domNode.name {...data}>
                  {' '}
                  {domToReact(domNode.children, options)}
                </domNode.name>
              );
            }
          }

          //When tag is <img>
          else if (domNode.name === 'img') {
            !data['src'] ? (data['src'] = ' ') : null;
            return <domNode.name {...data} />;

            //When tag is not <img> or <a>
          } else {
            return <domNode.name {...data}>{text}</domNode.name>;
          }
        }
      },
    };

    return (
      <idg-container-item>
        {domToReact(this.props.itemTemplate, options)}
      </idg-container-item>
    );
  }
}

export default CustomerCountainerItem;
