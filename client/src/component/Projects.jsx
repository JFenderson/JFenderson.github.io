import React from 'react';


const Projects = (props) => {
    const projectsObj = props.projectData;
    const getProjects = props.projectData.map(function(item, index) {
        console.log(item)
        return(
            <div className="box-list__box" key={index}>
            <h3 className="section-box-title">{item.name}</h3>
            <span>{item.decription}</span>
            <div>task:{item.tasks}</div>
            <div>tech used:{item.technologies}</div>
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