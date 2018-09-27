import React, { Component } from 'react';
import HeaderSection from '../components/HeaderSection.js';
import TemplateListItem from './TemplateListItem';
import TemplatePreview from './TemplatePreview';
import CreateNewProject from './CreateNewProject';
import './index.css';
import * as actionCreators from '../../action';
import { connect } from 'react-redux';

class CreateNewTemplate extends Component {
  constructor() {
    super();
    this.state = {
      templateList: [],
    };
  }

  componentWillMount() {
    this.props.fetchTemplatetList('templates');
    //  console.log('componentWillMount')
  }

  /*componentWillReceiveProps(nextProps){
    console.log('componentWillReceiveProps')
  }
 
  componentDidMount(){
    console.log('componentDidMount')
  }*/
  /*componentWillUpdate(nextProps, nextState){
    console.log(nextState)
  }
  
  componentDidUpdate(){
     console.log('componentDidUpdate')
    
  }*/
  /*
  componentWillUnmount(){
      console.log('componentWillUnmount')
  }*/

  render() {
    //TODO: connect redux with these popups
    //<TemplatePreview/>
    //<CreateNewProject/>
    const { templateList } = this.props;
    // console.log(this.props.templateList.items)
    return (
      <div id="createNewTemplate" className="projectListPageStyles">
        {this.props.templateList.isPreview.open ? <TemplatePreview /> : null}
        {this.props.templateList.isCreate.open ? <CreateNewProject /> : null}

        <HeaderSection />

        <div className="lively-container">
          <div className="title cf">
            <h1 className="lively-left">Select a template</h1>

            <div className="alignRight">
              <a href="">Copy from another zone project</a>
            </div>
            <div className="lively-right" />
          </div>
          <div className="cf">
            <ul className="list cf">
              <li className=" col-3 lively-left paddL createNewTemplate ">
                <a href="">
                  <span>
                    <span>+</span>
                    Click or drag your template file here
                  </span>
                </a>
                <a
                  href="#"
                  className="alignCenter lively-block padd"
                  target="_blank"
                >
                  Guideline
                </a>
              </li>

              {this.props.templateList.items.map((item, index) => {
                return (
                  <TemplateListItem
                    key={item.title + index}
                    item={item}
                    index={index}
                  />
                );
              })}
            </ul>
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
)(CreateNewTemplate);
