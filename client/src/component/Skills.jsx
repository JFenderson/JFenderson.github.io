import React, { Component, Fragment } from 'react';
import * as FaIconPack from 'react-icons/lib/fa';
import * as IoIconPack from 'react-icons/lib/io';

import moment from 'moment';

const Skills = props => {
    const getSkills = props.skillsData.map(function(item, index) {
  		return (
        <div className="box-list__box" key={index}>
            <h3 className="section-box-title">{item.name} <span>{item.level}</span></h3>
            <div>{item.keywords}</div>
  				</div>
        )
  	});

  	return (
      <section className="section section__skills">
        <h2 className="section__title">Skills</h2>
        <div className="section-content">
          <div className="box-list">
            {getSkills}
          </div>
        </div>
      </section>
  	)
};


export default Skills;