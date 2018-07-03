import React, { Component, Fragment } from 'react';
import * as FaIconPack from 'react-icons/lib/fa';
import * as IoIconPack from 'react-icons/lib/io';

import moment from 'moment';

const Skills = props => {
  const getSkills = props.skillsData.map(function(item, index) {
    const skillStyle = {
      width: `${item.percent}%`
      }
    return (
        <div className="box-list__box" key={index}>
        <div>
          <span className="skill-percent">{item.percent}%</span>
          <span className="skill-name">{item.skill}</span>
        </div>
          <div className="progress">
          <div className="progress-bar" role="progressbar" style={skillStyle} aria-valuenow="${item.percent}" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>
        )
  	});

  	return (
      <section className="section section__skills">
        <h2 className="section__title">Skills</h2>
        <div className="section-content">
          <div className="skills-container">
            {getSkills}
          </div>
        </div>
      </section>
  	)
};


export default Skills;