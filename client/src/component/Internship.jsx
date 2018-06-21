import React from 'react';
import moment from 'moment';


const Internship = (props) => {
    const internshipObj = props.internshipData;
    const getInternship = props.internshipData.map(function(item, index) {
        const startDate = moment(item.startDate).format('MMM, YYYY');
        const endDate = moment(item.endDate).format('MMM, YYYY');
        return (
            <div className="box-list__box" key={index}>
              <h3 className="section-box-title"><a id="internLink" href={item.website} target="_blank">{item.name}</a></h3>
              <div>{item.position}</div>
              <div>{item.startDate} - {item.endDate}</div>
            </div>
        )
    });

    return (
        <section className="section section__internship">
          <h2 className="section__title">Internship</h2>
          <div className="section-content">
            <div className="box-list">
              {getInternship}
            </div>
          </div>
        </section>
        )
}


export default Internship;