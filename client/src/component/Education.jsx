import React from 'react';
import moment from 'moment';

const Education = props => {
    const getEducation = props.educationData.map(function(item, index) {
  		const startdate = moment(item.startDate).format('MMM, YYYY');
  		const enddate = moment(item.endDate).format('MMM, YYYY');
  		return (
            <li key={index} >
              <h5>{item.studyType} - {item.area}</h5>
              <span>{item.institution}</span>
              <span className="dates">{item.startDate} - {item.endDate}</span>
            </li>
        )
  	});

  	return (
      <section className="section section__education">
        <h2 className="section__title">Education</h2>
        <div className="__eduList">
          <ul>
            {getEducation}
          </ul>
        </div>
      </section>
  	)
};

export default Education;