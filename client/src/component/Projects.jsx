import React from 'react';


const Projects = (props) => {
    const projectsObj = props.projectData;
    const getProjects = props.projectData.map(function(item, index) {
        return(
            <div className="box-list__box" key={index}>
            <h3 className="section-box-title">{item.name}</h3>
            <span>{item.decription}</span>
            <div className="box-list__about"><span>Task:</span>{item.tasks}</div>
            <div className="box-list__about"><span>Tech Used:</span>{item.technologies}</div>
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