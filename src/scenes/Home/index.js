import React, { Component } from 'react';
import InputSearch from '../../components/Inputs/InputSearch';
import HeaderSection from '../components/HeaderSection.js';
import ProjectListItem from './ProjectListItem.js';
import './index.css';
import { Link } from 'react-router-dom';
import * as actionCreators from '../../action';
import { connect } from 'react-redux';
class Home extends Component {
  componentWillMount() {
    this.props.fetchProjectList('pages');
  }
  render() {
    const { projectList } = this.props;

    return (
      <div id="lively-home" className="projectListPageStyles">
        <HeaderSection />
        <div className="lively-container">
          <div className="title cf">
            <h1 className="lively-left">Project List</h1>
            <div className="lively-right">
              <InputSearch />
            </div>
          </div>
          <div className="cf">
            <ul className="list">
              <li className=" col-3 lively-left paddL createProject">
                <Link to="/create">
                  <span>
                    <span>+</span>
                    Create new project
                  </span>
                </Link>
              </li>
              {projectList.items.map((item, index) => {
                return (
                  <ProjectListItem
                    key={item.title + item.id}
                    id={item.id}
                    item={item}
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
  projectList: store.projectList,
});
export default connect(
  mapStateToProps,
  actionCreators
)(Home);
