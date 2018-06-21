import React from 'react';
import moment from 'moment';


const Volunteer = props => {
    const getVolunteer = props.volunteer.map(function(item, index){
      // const startDate = moment(item.startDate).format('MMM, YYYY');
      // const endDate = moment(item.endDate).format('MMM, YYYY');
      return (
          <div className="box-list__box" key={index}>
            <h3 className="section-box-title"><a id="volLink" href={item.website} target="_blank">{item.company}</a></h3>
            <div>{item.position}</div>
            <div>{item.startDate} - {item.endDate}</div>
            <div>{item.summary}</div>
          </div>
      )
    });

    return  (
      <section className="section section__volunteer">
        <h2 className="section__title">Volunteer</h2>
        <div className="section-content">
          <div className="box-list">
            {getVolunteer}
          </div>
        </div>
      </section>
    )
};

export default Volunteer;