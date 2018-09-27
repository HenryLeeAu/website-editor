import React, { Component } from 'react';

import ProjectStatusBadge from './ProjectStatusBadge';
/*
Status
  <ProjectStatusBadge Draft>Draft</ProjectStatusBadge>
  <ProjectStatusBadge Live>Live</ProjectStatusBadge>
  <ProjectStatusBadge Expired>Expired</ProjectStatusBadge>
  <ProjectStatusBadge Pause>Pause</ProjectStatusBadge>
*/ 
class ProjectStatus extends Component {
  render() {
    return (
      <span className="projectStatus"> 
        {
          this.props.status ? <ProjectStatusBadge Live>OnLine</ProjectStatusBadge> :<ProjectStatusBadge Expired>Offline</ProjectStatusBadge>
        }
         
      </span>

    )
  }
}

export default ProjectStatus;
