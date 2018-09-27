import React, { Component } from 'react';
import InputSearch from '../../components/Inputs/InputSearch';
import HeaderSection from '../components/HeaderSection';
import ProjectStatus from '../../components/ProjectStatus';
import { Link } from 'react-router-dom';

class ProjectListItem extends Component {
  render() {
    //console.log(this.props.item)
    //console.log(this.props.index)
    return (
      <li className="ListItem paddL col-3 lively-left">
        <Link to={'/edit/' + this.props.id}>
          <div
            className="cf "
            style={{
              backgroundUrl: {
                /*TODO thumbnail image*/
              },
            }}
          >
            {/* TODO: <span className="category right ">Zone</span> */}
            <span className="hideBtn">
              <span>Edit this project</span>
            </span>
            <div className="nameSection">
              {<ProjectStatus status={this.props.item.is_published} />}
              <span className="projectName">{this.props.item.title}</span>
            </div>
          </div>
        </Link>
        {/* TODO: update time */}
        <span className="createTime"> 2/20/17 13:00 updated</span>
      </li>
    );
  }
}

export default ProjectListItem;
