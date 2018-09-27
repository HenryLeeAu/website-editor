import React, { Component } from 'react';
import CustomerLogo from '../components/customerTemplate/CustomerLogo';
import Parser from 'html-react-parser';
import domToReact from 'html-react-parser/lib/dom-to-react';

const ParserCondition = {
  replace: domNode => {
    if (!domNode.attribs) return;
    if (domNode.attribs.logo === '') {
      return (
        <domNode.name id={domNode.attribs.id} className={domNode.attribs.class}>
          <CustomerLogo src={this.state.logo.imgUrl}>
            {domToReact(domNode.children, ParserCondition)}
          </CustomerLogo>
        </domNode.name>
      );
    }
  },
};

export default ParserCondition;
