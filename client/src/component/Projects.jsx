import React from 'react';


const Projects = (props) => {
    const projectsObj = props.projectData;
    const getProjects = props.projectData.map(function(item, index) {
        return(
            <div className="card"  key={index}>
            <div className="card-header">
              <h3 className="section-box-title">{item.name}</h3>
            </div>
            <div className="card-body __box">
              <span>{item.decription}</span>
              <div className="box-list__about"><span>Task:</span>{item.tasks}</div>
              <div className="box-list__about"><span>Tech Used:</span>{item.technologies}</div>
            </div>

          </div>
        )
    });

    return (
        <section className="section section__publications">
          <h2 className="section__title">Projects</h2>
          <div className="section-content">
            <div className="box-list">
              {getProjects}
            </div>
          </div>
        </section>
        )
}


export default Projects;