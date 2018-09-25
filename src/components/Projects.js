import React, { Component } from 'react';
import ProjectItem from './Project-item'
class Projects extends Component {
    
  render() {
    let projectItems;
    if(this.props.projects){
       projectItems = this.props.projects.map(project => {
           return(
            <ProjectItem key={project.title} project={project} />
           )
       })
    }
    return (
      <div className="App">
            {projectItems}
      </div>
    );
  }
}

export default Projects;
